import{i as e,s as l,q as a,r as s,d as o,e as t,y as u,o as r,u as n,z as d,x as c}from"./vendor.a9a1ba91.js";const p=t("div",{class:"register-container-title"},"用户注册",-1),i=t("div",{class:"get-code"},"获取验证码",-1),g=c("提交"),m={style:{color:"#fff"}},v=c(" 已有账户？去 "),f=t("div",{class:"register-container-tips"},"珠海市普林芯驰科技有限公司",-1),_={expose:[],setup(c){const _=e("global");l("https://xuanci.spacetouch.co/include/vdimgck.php");const h=a({username:"",password:"",google_code:void 0});function y(){_.$router.push("/success")}return(e,l)=>{const a=s("a-col"),c=s("a-input"),_=s("a-form-item"),w=s("a-textarea"),x=s("a-button"),b=s("a-form"),k=s("a-row");return r(),o("div",{class:"register-container",style:`background-image: url(${e.getSrc("/src/assets/login_images/login_background.png")});`},[t(k,null,{default:u((()=>[t(a,{xs:0,md:0,sm:12,lg:14,xl:16}),t(a,{xs:24,sm:24,md:12,lg:10,xl:6},{default:u((()=>[t("div",{class:"register-container-form",style:`background-image: url(${e.getSrc("/src/assets/login_images/login_form.png")});`},[p,t(b,{model:n(h),onSubmit:[y,l[7]||(l[7]=d((()=>{}),["prevent"]))]},{default:u((()=>[t(_,null,{default:u((()=>[t(c,{value:n(h).username,"onUpdate:value":l[1]||(l[1]=e=>n(h).username=e),placeholder:"账号名称"},null,8,["value"])])),_:1}),t(_,null,{default:u((()=>[t(c,{value:n(h).password,"onUpdate:value":l[2]||(l[2]=e=>n(h).password=e),type:"password",placeholder:"密码"},null,8,["value"])])),_:1}),t(_,null,{default:u((()=>[t(c,{value:n(h).password1,"onUpdate:value":l[3]||(l[3]=e=>n(h).password1=e),type:"password",placeholder:"确认密码"},null,8,["value"])])),_:1}),t(_,null,{default:u((()=>[t(c,{placeholder:"真实姓名"})])),_:1}),t(_,{help:"不接受个人邮箱注册，只接受企业、机构邮箱。"},{default:u((()=>[t(c,{placeholder:"邮箱"})])),_:1}),t(_,null,{default:u((()=>[t(w,{placeholder:"项目描述",autosize:{minRows:3,maxRows:3}})])),_:1}),t(_,null,{default:u((()=>[t(c,{value:n(h).username,"onUpdate:value":l[4]||(l[4]=e=>n(h).username=e),placeholder:"手机号码"},null,8,["value"])])),_:1}),t(_,null,{default:u((()=>[t(c,{value:n(h).google_code,"onUpdate:value":l[5]||(l[5]=e=>n(h).google_code=e),placeholder:"验证码",style:{position:"relative"}},null,8,["value"]),i])),_:1}),t(_,null,{default:u((()=>[t(x,{type:"primary","html-type":"submit"},{default:u((()=>[g])),_:1})])),_:1}),t(_,null,{default:u((()=>[t("span",m,[v,t("a",{style:{color:"#DEB887"},onClick:l[6]||(l[6]=l=>e.$router.push("/login"))},"登录")])])),_:1})])),_:1},8,["model"])],4)])),_:1})])),_:1}),f],4)}}};export default _;
