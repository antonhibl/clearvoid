var Opcodes = Java.type('org.objectweb.asm.Opcodes');
var MethodInsnNode = Java.type('org.objectweb.asm.tree.MethodInsnNode');

function initializeCoreMod() {
    return {
        'clearvoid_astral_sky': {
            'target': {
                'type': 'CLASS',
                'name': 'hellfirepvp.astralsorcery.client.sky.ChainingSkyRenderer'
            },
            'transformer': function (classNode) {
                var patched = 0;
                var methods = classNode.methods;
                for (var i = 0; i < methods.size(); i++) {
                    var m = methods.get(i);
                    var insns = m.instructions.toArray();
                    for (var j = 0; j < insns.length; j++) {
                        var n = insns[j];
                        if (n.getOpcode() === Opcodes.INVOKEINTERFACE && n.owner === 'java/util/List'
                                && n.name === 'contains' && n.desc === '(Ljava/lang/Object;)Z') {
                            m.instructions.insertBefore(n, new MethodInsnNode(Opcodes.INVOKEVIRTUAL,
                                'java/lang/Object', 'toString', '()Ljava/lang/String;', false));
                            patched++;
                        }
                    }
                }
                if (typeof print === 'function') {
                    print('[Clear Void] Astral constellation-only sky fix applied to ' + patched + ' check(s)');
                }
                return classNode;
            }
        }
    };
}
