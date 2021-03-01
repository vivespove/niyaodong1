function foo()
   {
       //创建要轮播的图片列表，元素为图片地址
       let imgList = ['img/012.webp',
					'img/013.webp',
					'img/014.webp',
					'img/015.webp',
					'img/016.webp',
					
					'img/011.webp'];
       //找到要轮播图片的img标签,通过id寻找
       let imgTable=document.getElementById('i1');
       //获取当前img标签的src，
       let img_src= imgTable.getAttribute('src');
       //获取当前src在图片列表中的索引，如果该索引加一小于等于列表长度，即可索引加1，修改src播放下一张图片
       let img_index = imgList.indexOf(img_src)+1;

       if (img_index<imgList.length)
       {
           imgTable.setAttribute('src',imgList[img_index]);
       }
       else
       {
           imgTable.setAttribute('src',imgList[0])
       }
   }
    setInterval(foo,2000)