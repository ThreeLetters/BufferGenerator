function set(data1) {var FastBuffers = {
    writer: class Writer {
        constructor(size) {
            this.index = 0;
            this.buffer = Buffer.alloc(size);
        }
        writeString8(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt8(string.charCodeAt(i))
            }
            this.writeUInt8(0)
        }
        writeString16(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt16BE(string.charCodeAt(i))
            }
            this.writeUInt16BE(0)
        }
        writeString32(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt32BE(string.charCodeAt(i))
            }
            this.writeUInt32BE(0)
        }
        writeInt8(n) {
            this.buffer.writeInt8(n, this.index++)
        }
        writeInt16BE(n) {
            this.buffer.writeInt16BE(n, this.index)
            this.index += 2;
        }
        writeInt16LE(n) {
            this.buffer.writeInt16LE(n, this.index)
            this.index += 2
        }
        writeInt32BE(n) {
            this.buffer.writeInt32BE(n, this.index)
            this.index += 4;
        }
        writeInt32LE(n) {
            this.buffer.writeInt32LE(n, this.index)
            this.index += 4;
        }
        writeUInt8(n) {
            this.buffer.writeUInt8(n, this.index++)
        }
        writeUInt16BE(n) {
            this.buffer.writeUInt16BE(n, this.index)
            this.index += 2;
        }
        writeUInt16LE(n) {
            this.buffer.writeUInt16LE(n, this.index)
            this.index += 2;
        }
        writeUInt32BE(n) {
            this.buffer.writeUInt32BE(n, this.index)
            this.index += 4;
        }
        writeUInt32LE(n) {
            this.buffer.writeUInt32LE(n, this.index)
            this.index += 4;
        }
        toBuffer() {
            return this.buffer;
        }
    },
    reader: class Reader {
        constructor(buf) {
            this.index = 0;
            this.buffer = buf;
        }
        readString8() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt8();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readString16() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt16BE();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readString32() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt32BE();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readInt8() {
            return this.buffer.readInt8(this.index++);
        }
        readUInt8() {
            return this.buffer.readUInt8(this.index++);
        }
        readInt16BE() {
            var data = this.buffer.readInt16BE(this.index);
            this.index += 2;
            return data;
        }
        readInt16LE() {
            var data = this.buffer.readInt16LE(this.index);
            this.index += 2;
            return data;
        }
        readUInt16BE() {
            var data = this.buffer.readUInt16BE(this.index);
            this.index += 2;
            return data;
        }
        readUInt16LE() {
            var data = this.buffer.readUInt16LE(this.index);
            this.index += 2;
            return data;
        }
        readInt32BE() {
            var data = this.buffer.readInt32BE(this.index);
            this.index += 4;
            return data;
        }
        readInt32LE() {
            var data = this.buffer.readInt32LE(this.index);
            this.index += 4;
            return data;
        }
        readUInt32BE() {
            var data = this.buffer.readUInt32BE(this.index);
            this.index += 4;
            return data;
        }
        readUInt32LE() {
            var data = this.buffer.readUInt32LE(this.index);
            this.index += 4;
            return data;
        }
    }
}
function setIfs(writer,array) {
    var i,j,temparray,chunk = 7;
for (i=0,j=array.length; i<j; i+=chunk) {
    temparray = array.slice(i,i+chunk);
while (temparray.length < 7) temparray.push(0) n    writer.writeUInt8(parseInt("1" + temparray.join(""),2));
}
    writer.writeUInt8(0);
}
var byteLen = 0;
var ifs = [];
byteLen += 2 + data1.is.length * 2;
byteLen += 1 + data1.hello.length * 1;
byteLen += Math.ceil(ifs.length / 7) + 1
var writer = new FastBuffers.writer(byteLen);
setIfs(writer,ifs);
writer.writeString16(data1.is);
writer.writeString8(data1.hello);
writer.writeUInt8(data1.this+62);
writer.writeUInt16BE(data1.atest-17029);
return writer.toBuffer();}