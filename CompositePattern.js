//Composite Pattern

//The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies.
//It lets clients treat individual objects and compositions uniformly.

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  getSize() {
    return this.size;
  }
  getName(){
    return this.name;
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addFile(file) {
    this.children.push(file);
  }
  listFiles(){
    return this.children.map(file=>file.getName()).join(', ')
  }
  getName(){
    return this.name;
  }
}

const file1 = new File("Learn.txt",100);
const file2= new File ("Code.txt",200);
const file3= new File ("Sleep.txt",300);
const file4 = new File("Repeat.txt",400);
const folder1 = new Folder("Sumanth's Life Cycle");

folder1.addFile(file1);
folder1.addFile(file2);
folder1.addFile(file3);
folder1.addFile(file4);

console.log(`${folder1.getName()} Folder has Size ${folder1.children.reduce((sum,file)=> sum + file.getSize(),0)} MB`)
console.log(`${folder1.getName()} Folder has following Files `,folder1.listFiles())


