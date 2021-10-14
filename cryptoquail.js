function charCodeAt(input) {
    var keys = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"";
    var values = [];
    for (var k = 0; k < keys.length; k++) {
        values.push(k);
    }
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === input) {
            return values[i];
        }
    }
}

function fromCharCode(input) {
    var keys = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"";
    var values = [];
    for (var k = 0; k < keys.length; k++) {
        values.push(k);
    }
    for (var i = 0; i < keys.length; i++) {
        if (values[i] === input) {
            return keys[i];
        }
    }
}

function encode(string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++){
        number += charCodeAt(string[i]).toString(16);}
    return number;
}



class quail {
    getInfo() {
        return {
            id: "cryptoquail",
            name: "CryptoQuail",
            blocks: [
                {
                    opcode: "crypt",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Encrypt/Decrypt: Message [M] | Key [K]",
                    arguments: {
                        M: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "penguins"
                        },
                        K: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "123"
                        }
                    }
                }
                ]
            };
        }
    crypt(arg) {
        var key = arg.K;
        var input = arg.M;
        var output = [];
        var int1 = encode(key) % 20;
        for (var i = 0; i < input.length; i++) {
            var charCode = charCodeAt(input[i]) ^ charCodeAt(key[i % key.length]) ^ int1;
            output.push(fromCharCode(charCode));
        }
        return output.join("");
    }

      


}
Scratch.extensions.register(new quail());
