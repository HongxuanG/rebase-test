import mkdirp from "mkdirp";
mkdirp('/src/assets/dir').then((made)=>{
  console.log('文件夹已创建',made);
})
