
new Vue({
    el:"#app",
    data:{
        biaoti:"标题",
        txt:"",
        shuzi:"0",
        time:"",
        added:[
            {tit:"",text:"",intime:"", shuz:"0"}
        ]
    },
    methods:{
        
        fun:function(){
            this.added.push({
                tit:this.biaoti,
                text:this.txt,
                shuz:this.txt.split("").length,
                intime:new Date().toLocaleString()
            })
        },
         del:function(e){
        this.added.splice(e,1);
        },
        fun1:function(){
            this.shuzi=this.txt.split("").length
        }
    }
})