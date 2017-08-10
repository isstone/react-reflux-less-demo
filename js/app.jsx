var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var IndexRoute=ReactRouter.IndexRoute;


// 定义Header组件，头部部分
var Header=React.createClass({
   	render:function(){
      return(
       <div className="header">
       	  <div className="logo"><img src="img/logo.png" alt=""/></div>
       	  <div className="nav">
         		<ul>
             <a href={'#/'}><li>音乐馆</li></a>
             <a href={'#/type/1'}><li>我的音乐</li></a>
             <a href={'#/load'}><li>下载客户端</li></a>
             <a href={'#/vip'}><li>VIP</li></a>
         		</ul>
         	</div>
         	<div className="search">
         	    <input type="text"  placeholder="悟空传"/>
         	</div>
         	<div className="login">
         		<ul>
         			<li>登录</li>
         			<li>开发绿钻豪华版</li>
         			<li>开通付费包</li>
         		</ul>
         	</div>
       </div>
      	)
	}
})
// 定义home组件
var Home=React.createClass({
  getInitialState:function(){
    
    return{
      homeNav:[]
    }

  },
	  createHomenav:function(){
      console.log(this.state.homeNav,222)
      return this.state.homeNav.map(function(obj,index){
       return(
       <div className="home-main-inner-detail-create" key={index}>
        <a href="">
           <div className="carousel" >
                  <div className="picture">
                      <img className="picture1" src={obj.src1} alt=""/>
                      <img className="picture2" src={obj.src2} alt=""/>
                  </div>
                   <div className="title">
                     <span>{obj.title1}</span>
                     <span>{obj.title2}</span>
                   </div>
           </div>
         </a>
       </div>
        )
      }.bind(this))
    },
    render:function(){
    	return(
      <div className="home">
          <div className="home-nav">
            <a href="">首页</a>
            <a href="">歌手</a>
            <a href="">专辑</a>
            <a href="">排行榜</a>
            <a href="">分类歌单</a>
            <a href="">电台</a>
            <a href="">MV</a>
         </div>  
        <div className="home-main">
         <div className="home-main-inner">
          <p>新歌首发</p>
          <div className="home-main-inner-nav">
           <a href="">内地</a>
           <a href="">港台</a>
           <a href="">欧美</a>
           <a href="">韩国</a>
           <a href="">日本</a>
           <a href="">全部&gt;</a>
          </div>
         <div className="home-main-inner-detail">{this.createHomenav()}</div>
         <span className="left-btn btn">&lt;</span>
         <span className="right-btn btn">&gt;</span>
         <ul className="curcle">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
        </div>
        </div>        
      </div>

    		)
    	
    },
    componentDidMount:function(){
      $.get('data/homeNav.json',function(res){
        // console.log(res)
        if(res&&res.errno===0){
          this.setState({
            homeNav:res.data
          })
          console.log(this.state.homeNav,111)
        }
      }.bind(this))
    }
})
// 定义MUsic组件
var Music=React.createClass({
	render:function(){
		return(
          <div>
            <h1>私人音乐空间，听我想听的歌</h1>
            <h3>登录管理我的音乐，多终端同步</h3>
            <a>立即登录</a>
          </div>
			)
	}
})
// 定义Load组件
var Load=React.createClass({
	render:function(){
		return(
         <div>load页面</div>
			)
	}
})

// 定义VIP组件
var Vip=React.createClass({
	render:function(){
		return(
         <div>Vip部分</div>
			)
	}
})

// 定义App组件
var App =React.createClass({
  getInitialState : function (){
    return {

    }
  },
  render:function(){
    return(
        <div>
          <Header></Header>
          <div className="app-main">
             {this.props.children}
          </div> 
        </div>
    )
  }
})

var routes=(
  <Router>
   <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="type/:id" component={Music}></Route>
      <Route path="load" component={Load}></Route>
      <Route path="vip" component={Vip}></Route>    
   </Route>
   </Router>
	)

ReactDOM.render(routes,app)
