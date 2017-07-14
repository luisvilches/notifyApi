class Notify {

    constructor(args){
        this.mainContainer = document.createElement('div');
        this.transition;
        document.getElementsByTagName('body')[0].appendChild(this.mainContainer);
        this.pos = args;
        this.NotifyConfig(this.pos);
        this.style = args.style;
        Notification.requestPermission();
    }

    NotifyConfig(args){
        switch (args.position){
            case 'top-left':
                this.mainContainer.classList.add('top-left');
                this.transition = 'fadeInLeft';
                break;
            case 'top-right':
                this.mainContainer.classList.add('top-right');
                this.transition = 'fadeInRight';
                break;
            case 'bottom-left':
                this.mainContainer.classList.add('bottom-left');
                this.transition = 'fadeInLeft';
                break;
            case 'bottom-right':
                this.mainContainer.classList.add('bottom-right');
                this.transition = 'fadeInRight';
                break;
            case 'top-center':
                this.mainContainer.classList.add('top-center');
                this.transition = 'fadeInDown';
                break;
            case 'bottom-center':
                this.mainContainer.classList.add('bottom-center');
                this.transition = 'fadeInUp';
                break;
            default:
                this.mainContainer.classList.add('top-right');
                this.transition = 'fadeInRight';
                break;
        }
    }

    numeroAleatorioDecimales(min, max) {
        var num = Math.random() * (max - min);
        return Math.floor(num + min);
    }

    create(args){
        if (Notification.permission == 'granted') {
            switch (this.ifNavegador()){
                case 'Chrome':
                    switch (this.style){
                        case 'default':
                            this.push(args);
                            break;
                        case 'notify':
                            this.show(args);
                            break;
                    }
                    break;
                case 'Safari':
                    switch (this.style){
                        case 'default':
                            this.push(args);
                            break;
                        case 'notify':
                            this.show(args);
                            break;
                    }
                    break;
                case 'Firefox':
                    switch (this.style){
                        case 'default':
                            this.push(args);
                            break;
                        case 'notify':
                            this.show(args);
                            break;
                    }
                    break;
                case 'Opera':
                    switch (this.style){
                        case 'default':
                            this.push(args);
                            break;
                        case 'notify':
                            this.show(args);
                            break;
                    }
                    break;
                case 'Edge':
                    this.show(args);
                    break;
                case 'MSIE':
                    this.show(args);
                    break;
                default:
                    console.log('Navegador no es soportado');

            }

        } else if(Notification.permission == 'default'){
            console.log('Actualmente tienes las notificaciones bloqueadas para este sitio');
        } else {
            Notification.requestPermission();
        }
    }

    push(args){

        var notify = new Notification(args.title,{
            icon: args.icon,
            body: args.body,
            dir: 'ltr'});

        setTimeout(notify.close.bind(notify), 5000);
        notify.onclick = function(event) {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.open(objNoty.url, '_blank');
        }
    }

    show(args) {
        const noty = document.createElement('div');
        var id = this.numeroAleatorioDecimales(1,10);

        noty.innerHTML = `<div class="relative"><img src="https://image.flaticon.com/icons/svg/32/32178.svg" class="closeNotify"></img><div class="container"><img class="imgNoty" src="${args.icon}" alt=""><article class="articleNoty"><h2 class="titleNoty">${args.title}</h2><p class="bodyNoty">${args.body}</p></article></div></div>`;
        noty.classList.add('notify');
        noty.classList.add('animated');
        noty.classList.add(this.transition);
        noty.setAttribute('id',id);
        this.mainContainer.classList.add('notifyContainer');
        this.mainContainer.appendChild(noty);

        var b = document.getElementById(id);
        b.classList.add('animated');
        var container = b.querySelector('.container');
        var close = b.querySelector('.closeNotify');

        container.addEventListener('click',args.onclick,false);
        close.addEventListener('click',function(){noty.classList.add("fadeOut");});

        var mainC = this.mainContainer;

        setTimeout(function(){
            noty.classList.add("fadeOut");
            setTimeout(function(){
                mainC.removeChild(noty);
            },700);
        },args.timeClose)
    }

    ifNavegador(){
        var agente = window.navigator.userAgent;
        var navegadores = ["Chrome", "Firefox", "Safari", "Opera", "Trident", "MSIE", "Edge"];
        for(var i in navegadores){
            if(agente.indexOf( navegadores[i]) != -1 ){
                return navegadores[i];
            }
        }
    }
}


