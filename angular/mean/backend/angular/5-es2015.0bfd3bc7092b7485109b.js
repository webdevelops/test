(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,e){"use strict";e.r(t),e.d(t,"AuthModule",(function(){return M}));var i=e("3Pt+"),a=e("ofXK"),r=e("xRBb"),s=e("tyNb"),o=e("fXoL"),c=e("qXBG"),u=e("Wp6s"),b=e("Xa2L"),m=e("kmnG"),l=e("qFsG"),p=e("bTqV");function d(n,t){1&n&&o.Ob(0,"mat-spinner")}function f(n,t){1&n&&(o.Sb(0,"mat-error"),o.wc(1,"Please enter a valid email."),o.Rb())}function g(n,t){1&n&&(o.Sb(0,"mat-error"),o.wc(1,"Please enter a valid password."),o.Rb())}function h(n,t){if(1&n){const n=o.Tb();o.Sb(0,"form",2,3),o.ac("submit",(function(){o.pc(n);const t=o.nc(1);return o.ec().onLogin(t)})),o.Sb(2,"mat-form-field"),o.Ob(3,"input",4,5),o.vc(5,f,2,0,"mat-error",0),o.Rb(),o.Sb(6,"mat-form-field"),o.Ob(7,"input",6,7),o.vc(9,g,2,0,"mat-error",0),o.Rb(),o.Sb(10,"button",8),o.wc(11,"Login"),o.Rb(),o.Rb()}if(2&n){const n=o.nc(4),t=o.nc(8);o.Bb(5),o.jc("ngIf",n.invalid),o.Bb(4),o.jc("ngIf",t.invalid)}}function v(n,t){1&n&&o.Ob(0,"mat-spinner")}function S(n,t){1&n&&(o.Sb(0,"mat-error"),o.wc(1,"Please enter a valid email."),o.Rb())}function w(n,t){1&n&&(o.Sb(0,"mat-error"),o.wc(1,"Please enter a valid password."),o.Rb())}function I(n,t){if(1&n){const n=o.Tb();o.Sb(0,"form",2,3),o.ac("submit",(function(){o.pc(n);const t=o.nc(1);return o.ec().onSignup(t)})),o.Sb(2,"mat-form-field"),o.Ob(3,"input",4,5),o.vc(5,S,2,0,"mat-error",0),o.Rb(),o.Sb(6,"mat-form-field"),o.Ob(7,"input",6,7),o.vc(9,w,2,0,"mat-error",0),o.Rb(),o.Sb(10,"button",8),o.wc(11,"Signup"),o.Rb(),o.Rb()}if(2&n){const n=o.nc(4),t=o.nc(8);o.Bb(5),o.jc("ngIf",n.invalid),o.Bb(4),o.jc("ngIf",t.invalid)}}const L=[{path:"login",component:(()=>{class n{constructor(n){this.authService=n,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.authStatusListener.subscribe(n=>{this.isLoading=!1})}onLogin(n){n.invalid||this.authService.login(n.value.email,n.value.password)}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Nb(c.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["app-login"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["type","email","name","email","matInput","","ngModel","","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["name","password","type","password","matInput","","ngModel","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(o.Sb(0,"mat-card"),o.vc(1,d,1,0,"mat-spinner",0),o.vc(2,h,12,2,"form",1),o.Rb()),2&n&&(o.Bb(1),o.jc("ngIf",t.isLoading),o.Bb(1),o.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,b.b,i.p,i.j,i.k,m.c,l.a,i.a,i.i,i.l,i.n,i.b,p.b,m.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}map-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(n){this.authService=n,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.authStatusListener.subscribe(n=>{this.isLoading=!1})}onSignup(n){n.invalid||(this.isLoading=!0,this.authService.createUser(n.value.email,n.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Nb(c.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["app-signup"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["type","email","name","email","matInput","","ngModel","","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["name","password","type","password","matInput","","ngModel","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(o.Sb(0,"mat-card"),o.vc(1,v,1,0,"mat-spinner",0),o.vc(2,I,12,2,"form",1),o.Rb()),2&n&&(o.Bb(1),o.jc("ngIf",t.isLoading),o.Bb(1),o.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,b.b,i.p,i.j,i.k,m.c,l.a,i.a,i.i,i.l,i.n,i.b,p.b,m.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}map-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let y=(()=>{class n{}return n.\u0275mod=o.Lb({type:n}),n.\u0275inj=o.Kb({factory:function(t){return new(t||n)},imports:[[s.e.forChild(L)],s.e]}),n})(),M=(()=>{class n{}return n.\u0275mod=o.Lb({type:n}),n.\u0275inj=o.Kb({factory:function(t){return new(t||n)},imports:[[a.c,i.g,r.a,y]]}),n})()}}]);