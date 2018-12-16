const express = require("express");
const pool = require("./pool");
const cors = require("cors")    //引入跨域模块


var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3000,()=>{
    console.log("服务器创建成功")
});


//解决跨域访问的问题
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    MSCredentials:true
}))


//1.轮播图片
app.get("/imagelist",(req,res)=>{
    var obj = [
   {id:1,img_url:"http://127.0.0.1:3000/img/swiper/9f8d8046653c4e249be5e129b7d6b77c.webp.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/swiper/e99c2a5d2b1343ee8b7ac44c0f5d1c11.webp.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/swiper/663BF2D861753D64B140646F8373D692.jpg"},
  ];
    res.send(obj)
  });


2//首页商品列表
app.get("/cakelists",(req,res)=>{
  var sql="SELECT * FROM cakelists";
  pool.query(sql,[],(err,result)=>{
    if(err) throw(err);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.send()
  });  
});
2.//商品详情
app.get("/cakelists2",(req,res)=>{
  var id = req.query.id;
  var sql="SELECT * FROM cakelists where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw(err);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.send()
  });  
});
2.//商品详情
app.get("/cakelists3",(req,res)=>{
  var pid = req.query.pid;
  var sql="SELECT * FROM cakelists where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw(err);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.send()
  });  
});
2.//商品详细信息
//[id;title;now;old;商号]
//参数id
/*
app.get("/cakedetails",(req,res)=>{
  var id = req.query.id;
  var sql="SELECT id,title,price,i_mg,taste,material,person,storage FROM cakelists where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw(err)
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.send()
  }); 
});
*/
2.//商品详细信息——大图片
app.get("/getLimg",(req,res)=>{
  var id = req.query.id;
  var sql="SELECT id,img_l FROM cakeLimg where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw(err)
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.send()
  }); 
});


3.//功能七:购物车数据列表    
//组件发送ajax请求获取并显示数据
app.get("/shopCart",(req,res)=>{
var obj = [];
obj.push({id:1,title:"华为p10",price:3999,count:2})
obj.push({id:2,title:"华为p11",price:4999,count:1})
obj.push({id:3,title:"华为p12",price:5999,count:1})
res.send(obj);
})

4.//加入购物车
app.get("/addCartTo",(req,res)=>{
  var pid=req.query.pid;
  var count=req.query.count;
  var reg=/^[0-9]{1,}$/
  if(!reg.test(pid)){
    res.send({code:-1,msg:"商品编号有误"})
    return;
  }
  if(!reg.test(count)){
    res.send({code:-2,msg:"商品数量有误"})
    return;
  }
  res.send({code:1,msg:"添加成功"})
})

5.//功能四:用户发表评论
const qs = require("querystring");
app.post("/addComment",(req,res)=>{
   req.on("data",(buf)=>{
     var str = buf.toString();  
     var obj = JSON.parse(str); 
     var cmsg = obj.cmsg;         
     var cid = parseInt(obj.cid);
     var sql = "INSERT INTO xz_comment(content,imgc,ctime,nid) VALUES(?,'匿名',now(),?)";
     pool.query(sql,[cmsg,cid],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"添加成功"});
     })
   })
})

//功能五:用户获取指定新闻编号所有评论
app.get("/getComment",(req,res)=>{
  //获取指定新闻编号  
  var nid = parseInt(req.query.id);
  var pno = req.query.pno;            
  var pageSize = req.query.pageSize;  
  var sql = " SELECT count(id) as c FROM xz_comment";
  sql +=" WHERE nid = ?";
  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,[nid],(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
       }
    });
    //2.2:查找当前页内容
  var sql = " SELECT id,content,ctime,imgc";
     sql += " FROM xz_comment";
     sql += " WHERE nid = ?"
     sql += " ORDER BY id DESC";//降序排列
     sql += " LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);   
  pageSize = parseInt(pageSize)
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
     if(err)throw err;
      obj.data = result;
      progress+=50;
      if(progress==100){
      res.send(obj);
      }
  })
})

app.get("/newsinfo",(req,res)=>{
  var obj = {
    title:"北京房价下降，白菜价",
    content:"16万/平快快买啊!!!!!!"
   };
  res.send(obj);
});


/*用户登录 */
app.get("/login",(req,res)=>{
  //1:参数 2 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:正则表达式验证 
  //3:sql 
  var sql = " SELECT count(uid) as c FROM xz_users";
      sql +=" WHERE uname=? AND upwd = ?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    console.log(result)
        if(err)throw err;
        if(result[0].c==0){
          res.send({code:-1,msg:"用户名或密码错误"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  })
});

/*用户注册*/
app.post('/register',(req,res)=>{
  var $email=req.body.email;
  var $phone=req.body.phone;
  var $upwd=req.body.upwd;
  var $uname=req.body.uname;
  console.log($email)
  var sql="insert into xz_users values(null,?,?,?,?)";
  pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
     if(err) throw err;
   res.send("注册成功！"); 
  });
});