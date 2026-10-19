var Opcodes = Java.type('org.objectweb.asm.Opcodes');

var HORIZON = -64.5;

function initializeCoreMod() {
    return {
        'clearvoid_horizon': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.client.world.ClientWorld$ClientWorldInfo'
            },
            'transformer': function (classNode) {
                var patched = 0;
                var methods = classNode.methods;
                for (var i = 0; i < methods.size(); i++) {
                    var m = methods.get(i);
                    if (m.desc !== '()D') continue;
                    var insns = m.instructions.toArray();
                    for (var j = 0; j < insns.length; j++) {
                        var n = insns[j];
                        if (n.getOpcode() === Opcodes.LDC && n.cst == 63) {
                            n.cst = HORIZON;
                            patched++;
                        }
                    }
                }
                if (typeof print === 'function') {
                    print('[Clear Void] horizon patch applied to ' + patched + ' constant(s)');
                }
                return classNode;
            }
        }
    };
}
