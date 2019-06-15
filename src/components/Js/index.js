import Vue from 'vue'
import Popup from './Popup'

export let popup = (function(){
    let defaults = {//默认配置
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null
    };
    let myComponent = Vue.extend(Popup);
    return function(opts){//配置参数
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }
        let vm = new myComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);

    }
})()