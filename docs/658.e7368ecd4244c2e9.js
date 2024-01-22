"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[658],{3658:(te,Z,r)=>{r.r(Z),r.d(Z,{SettingsModule:()=>ee});var u=r(4755),s=r(9401),y=r(9812),N=r(5543),e=r(2223),m=r(5855),b=r(8784),C=r(7579),g=r(8675),L=r(9300),J=r(4004),d=r(2722),O=r(9841),A=r(5698),G=r(8603),f=r(8783),c=r(4133),S=r(9124),p=r(9129);const F=["unsavedChangesModal"];let x=(()=>{class t{set openModal(o){o&&!this.modalOpen()?this.modalOpen.set(!0):!1===o&&this.modalOpen()&&this.modalOpen.set(!1)}constructor(){this.afterClosed=new e.vpe,this.modalOpen=(0,e.tdS)(!1)}accept(){this.modalOpen.set(!1),this.afterClosed.emit(!0)}decline(){this.modalOpen.set(!1),this.afterClosed.emit(!1)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-unsaved-changes-dialog"]],viewQuery:function(o,n){if(1&o&&e.Gf(F,5,e.SBq),2&o){let l;e.iGM(l=e.CRH())&&(n.modal=l.first)}},inputs:{openModal:"openModal"},outputs:{afterClosed:"afterClosed"},standalone:!0,features:[e.jDz],decls:12,vars:1,consts:[[1,"modal","modal-bottom","sm:modal-middle",3,"open"],["unsavedChangesModal",""],[1,"modal-box"],["translate","",1,"font-bold","text-lg"],["translate","",1,"text-sm","my-3"],[1,"modal-action","gap-3"],["translate","",1,"btn","btn-primary",3,"click"],["translate","",1,"btn",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"dialog",0,1)(2,"div",2)(3,"h1",3),e._uU(4,"MODAL.unsavedChangesTitle"),e.qZA(),e.TgZ(5,"p",4),e._uU(6," MODAL.unsavedChangesParagraph "),e.qZA(),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return n.accept()}),e._uU(9,"BUTTONS.confirm"),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return n.decline()}),e._uU(11,"BUTTONS.goBack"),e.qZA()()()()),2&o&&e.Q6J("open",n.modalOpen())},dependencies:[u.ez,p.aw,p.Pi]}),t})();var Q=r(4367);function U(t,a){if(1&t&&(e.TgZ(0,"option",4),e._uU(1),e.ALo(2,"proper"),e.ALo(3,"translate"),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.value),e.xp6(1),e.Oqu(e.lcZ(2,2,e.lcZ(3,4,"THEMES."+o.key)))}}let E=(()=>{class t{constructor(){this.themes=c.SJ}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-theme-selector"]],inputs:{group:"group",controlName:"controlName"},decls:6,vars:5,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[1,"select","select-lg","mt-1","w-full",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.theme"),e.qZA(),e.TgZ(3,"select",2),e.YNc(4,U,4,6,"option",3),e.ALo(5,"keyvalue"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Q6J("formControlName",n.controlName),e.xp6(1),e.Q6J("ngForOf",e.lcZ(5,3,n.themes)))},dependencies:[u.sg,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,p.Pi,u.Nd,Q.w,p.X$]}),t})();function k(t,a){if(1&t&&(e.TgZ(0,"option",4),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(e.lcZ(2,2,"LANGUAGES."+o))}}let H=(()=>{class t{constructor(){this.languages=c.D}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-language-selector"]],inputs:{group:"group",controlName:"controlName"},decls:5,vars:3,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[1,"select","select-lg","mt-1","w-full",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.lang"),e.qZA(),e.TgZ(3,"select",2),e.YNc(4,k,3,4,"option",3),e.qZA()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Q6J("formControlName",n.controlName),e.xp6(1),e.Q6J("ngForOf",n.languages))},dependencies:[u.sg,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,p.Pi,p.X$]}),t})();function $(t,a){1&t&&(e.TgZ(0,"span",6),e._uU(1,"LABELS.wakelockOn"),e.qZA())}function D(t,a){1&t&&(e.TgZ(0,"span",6),e._uU(1,"LABELS.wakelockOff"),e.qZA())}let w=(()=>{class t{constructor(){this.isEnabled=(0,e.tdS)(!0),this.onDestroy$=new C.x}ngOnInit(){const o=this.group.get(this.controlName);o.valueChanges.pipe((0,d.R)(this.onDestroy$),(0,g.O)(o.value)).subscribe(n=>this.isEnabled.set(n))}ngOnDestroy(){this.onDestroy$.next()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-wake-lock-enabled"]],inputs:{group:"group",controlName:"controlName"},decls:8,vars:4,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[1,"cursor-pointer","label","bg-base-100","rounded-lg","ps-5","pe-3","py-4"],["class","label-text me-2","translate","",4,"ngIf","ngIfElse"],["isDisabledLabel",""],["type","checkbox",1,"checkbox","checkbox-primary",3,"formControlName"],["translate","",1,"label-text","me-2"]],template:function(o,n){if(1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.wakelock"),e.qZA(),e.TgZ(3,"label",2),e.YNc(4,$,2,0,"span",3),e.YNc(5,D,2,0,"ng-template",null,4,e.W1O),e._UZ(7,"input",5),e.qZA()()),2&o){const l=e.MAs(6);e.Q6J("formGroup",n.group),e.xp6(4),e.Q6J("ngIf",n.isEnabled())("ngIfElse",l),e.xp6(3),e.Q6J("formControlName",n.controlName)}},dependencies:[u.O5,s.Wl,s.JJ,s.JL,s.sg,s.u,p.Pi]}),t})();function Y(t,a){if(1&t&&(e.TgZ(0,"option",4),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(e.lcZ(2,2,"TEXT_SIZE."+o))}}let z=(()=>{class t{constructor(){this.availableTextSizes=c.xQ,this.isEnabled=(0,e.tdS)(!0),this.onDestroy$=new C.x}ngOnInit(){const o=this.group.get(this.controlName);o.valueChanges.pipe((0,d.R)(this.onDestroy$),(0,g.O)(o.value)).subscribe(n=>this.isEnabled.set(n))}ngOnDestroy(){this.onDestroy$.next()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-text-size"]],inputs:{group:"group",controlName:"controlName"},decls:5,vars:3,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[1,"select","select-lg","mt-1","w-full",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.textSize"),e.qZA(),e.TgZ(3,"select",2),e.YNc(4,Y,3,4,"option",3),e.qZA()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Q6J("formControlName",n.controlName),e.xp6(1),e.Q6J("ngForOf",n.availableTextSizes))},dependencies:[u.sg,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,p.Pi,p.X$]}),t})();function I(t,a){if(1&t&&(e.TgZ(0,"option",4),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(e.lcZ(2,2,"LINE_HEIGHT."+o))}}let _=(()=>{class t{constructor(){this.availableHeights=c.JA,this.isEnabled=(0,e.tdS)(!0),this.onDestroy$=new C.x}ngOnInit(){const o=this.group.get(this.controlName);o.valueChanges.pipe((0,d.R)(this.onDestroy$),(0,g.O)(o.value)).subscribe(n=>this.isEnabled.set(n))}ngOnDestroy(){this.onDestroy$.next()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-line-height"]],inputs:{group:"group",controlName:"controlName"},decls:5,vars:3,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[1,"select","select-lg","mt-1","w-full",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.lineHeight"),e.qZA(),e.TgZ(3,"select",2),e.YNc(4,I,3,4,"option",3),e.qZA()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Q6J("formControlName",n.controlName),e.xp6(1),e.Q6J("ngForOf",n.availableHeights))},dependencies:[u.sg,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,p.Pi,p.X$]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-render-history"]],inputs:{group:"group",controlName:"controlName"},decls:13,vars:2,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],["type","range","max","15","min","0",1,"range",3,"formControlName"],[1,"w-full","flex","justify-between","text-xs","px-2"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"LABELS.renderHistory"),e.qZA(),e._UZ(3,"input",2),e.TgZ(4,"div",3)(5,"span"),e._uU(6,"0"),e.qZA(),e.TgZ(7,"span"),e._uU(8,"5"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"10"),e.qZA(),e.TgZ(11,"span"),e._uU(12,"15"),e.qZA()()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Q6J("formControlName",n.controlName))},dependencies:[s.Fj,s.eT,s.JJ,s.JL,s.sg,s.u,p.Pi]}),t})();function M(t,a){if(1&t&&(e.TgZ(0,"option",4),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.key),e.xp6(1),e.Oqu(o.key)}}let B=(()=>{class t{constructor(){this.fontFamilies=c.Yx}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-font-family-selector"]],inputs:{group:"group",controlName:"controlName"},decls:6,vars:7,consts:[[1,"form-control",3,"formGroup"],["translate","",1,"text-accent","label"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0)(1,"span",1),e._uU(2,"SETTINGS.font"),e.qZA(),e.TgZ(3,"select",2),e.YNc(4,M,2,2,"option",3),e.ALo(5,"keyvalue"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.group),e.xp6(3),e.Tol("select select-lg mt-1 w-full "+n.fontFamilies.get(n.group.controls[n.controlName].value)),e.Q6J("formControlName",n.controlName),e.xp6(1),e.Q6J("ngForOf",e.lcZ(5,5,n.fontFamilies)))},dependencies:[u.sg,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,p.Pi,u.Nd]}),t})();function X(t,a){1&t&&(e.TgZ(0,"div",22),e._uU(1,"You must accept cookies in order to save settings."),e.qZA())}function R(t,a){if(1&t&&(e.TgZ(0,"div",20),e._uU(1," SETTINGS.p1 "),e.qZA()),2&t){const o=e.oxw();e.Q6J("classList",o.classList())("@fadeOutOnLeave",void 0)("@fadeInOnEnter",void 0)}}function P(t,a){if(1&t&&(e.TgZ(0,"div",20),e._uU(1," SETTINGS.p2 "),e.qZA()),2&t){const o=e.oxw();e.Q6J("classList",o.classList())("@fadeOutOnLeave",void 0)("@fadeInOnEnter",void 0)}}function V(t,a){if(1&t&&(e.TgZ(0,"div",20),e._uU(1," SETTINGS.p3 "),e.qZA()),2&t){const o=e.oxw();e.Q6J("classList",o.classList())("@fadeOutOnLeave",void 0)("@fadeInOnEnter",void 0)}}const W=[{path:"",component:(()=>{class t{constructor(o,n,l,i,h,T){this.fb=o,this.store=n,this.renderer=l,this.el=i,this.router=h,this.translate=T,this.modalClosed$=new C.x,this.onDestroy$=new C.x,this.currentTheme=(0,m.O4)(this.store.select(f.FS)),this.language=(0,m.O4)(this.store.select(f.BX)),this.wakeLockEnabled=(0,m.O4)(this.store.select(f.VL)),this.currentTextSize=(0,m.O4)(this.store.select(f.MO)),this.currentLineHeight=(0,m.O4)(this.store.select(f.wx)),this.renderHistory=(0,m.O4)(this.store.select(f.or)),this.fontFamily=(0,m.O4)(this.store.select(f.LT)),this.formGroup=this.fb.group({theme:this.fb.control(this.currentTheme()),lang:this.fb.control(this.language()),font:this.fb.control(this.fontFamily()),wakelock:this.fb.control(this.wakeLockEnabled()),renderHistory:this.fb.control(this.renderHistory()),textSize:this.fb.control(this.currentTextSize()),lineHeight:this.fb.control(this.currentLineHeight())}),this.renderHistoryFormValue=(0,m.O4)(this.formGroup.controls.renderHistory.valueChanges.pipe((0,g.O)(this.renderHistory()),(0,L.h)(v=>null!==v&&!isNaN(v)))),this.acceptedCookies=(0,m.O4)(this.store.pipe((0,b.Ys)(G.hp),(0,J.U)(v=>v.cookiesAccepted))),this.classList=(0,e.tdS)(`recognized-text ${this.currentTextSize()} ${this.currentLineHeight()} ${c.Yx.get(this.fontFamily())}`)}ngOnInit(){this.formGroup.get("theme")?.valueChanges.pipe((0,d.R)(this.onDestroy$)).subscribe(i=>{i&&this.renderer.setAttribute(this.el.nativeElement,"data-theme",i)}),this.formGroup.get("lang")?.valueChanges.pipe((0,d.R)(this.onDestroy$)).subscribe(i=>{i&&this.translate.use(i).subscribe(()=>{})});const o=this.formGroup.get("textSize").valueChanges.pipe((0,g.O)(this.currentTextSize())),n=this.formGroup.get("lineHeight").valueChanges.pipe((0,g.O)(this.currentLineHeight())),l=this.formGroup.get("font").valueChanges.pipe((0,g.O)(this.fontFamily()));(0,O.a)([o,n,l]).pipe((0,d.R)(this.onDestroy$)).subscribe(([i,h,T])=>{i&&h&&this._updateClassList(i,h,T)})}ngOnDestroy(){this.formGroup.dirty&&this.translate.use(this.language()),this.onDestroy$.next()}canDeactivate(){return!this.formGroup.dirty||(this.showUnsavedChangesModal=!0,this.modalClosed$.asObservable().pipe((0,A.q)(1)))}modalClosed(o){this.showUnsavedChangesModal=!1,this.modalClosed$.next(o)}saveSettings(){const o=this.formGroup.get("theme").value;this.store.dispatch(c.Vp.setTheme({theme:o}));const n=this.formGroup.get("lang").value;this.store.dispatch(c.Vp.setLanguage({language:n}));const l=this.formGroup.get("wakelock").value;this.store.dispatch(c.Vp.updateWakeLockEnabled({enabled:l}));const i=this.formGroup.get("textSize").value;this.store.dispatch(c.Vp.setTextSize({size:i}));const h=this.formGroup.get("lineHeight").value;this.store.dispatch(c.Vp.setLineHeight({height:h}));const T=this.formGroup.get("renderHistory").value;this.store.dispatch(c.Vp.setRenderHistory({count:T}));const v=this.formGroup.get("font").value;return this.store.dispatch(c.Vp.setFontFamily({font:v})),this.formGroup.markAsPristine(),this.router.navigate([""]),!1}_updateClassList(o,n,l){let i=`recognized-text ${o} ${n}`;l&&(i+=` ${c.Yx.get(l)}`),this.classList.set(i)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu),e.Y36(b.yh),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(y.F0),e.Y36(p.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-settings"]],decls:30,vars:15,consts:[[1,"flex","basis-full","items-stretch","justify-center","bg-base-300"],[1,"flex","flex-col","basis-full","p-3","sm:p-6","gap-3","sm:gap-12","max-w-4xl",3,"formGroup","submit"],[1,"basis-full","grid","sm:grid-cols-1","md:grid-cols-2","gap-3","sm:gap-12"],["controlName","theme",3,"group"],["controlName","lang",3,"group"],["controlName","font",3,"group"],["controlName","wakelock",3,"group"],["controlName","renderHistory",3,"group"],[1,"grid","grid-cols-2","gap-3"],["controlName","textSize",3,"group"],["controlName","lineHeight",3,"group"],[1,"flex","w-full","justify-end","items-center","gap-1","sm:gap-3"],["class","text-error text-sm",4,"ngIf"],["translate","","type","button","routerLink","..",1,"btn","btn-ghost","rounded-xl"],["type","submit","translate","",1,"btn","btn-primary","rounded-xl",3,"disabled"],[1,"form-control","overflow-y-auto"],[1,"label"],["translate","",1,"text-accent"],[1,"bg-base-100","text-base-content","font-raleway","p-6","gap-3","overflow-hidden","rounded-lg"],["translate","",3,"classList",4,"ngIf"],["translate","",3,"classList"],[3,"openModal","afterClosed"],[1,"text-error","text-sm"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("submit",function(){return n.saveSettings()}),e.TgZ(2,"div",2)(3,"div"),e._UZ(4,"app-theme-selector",3)(5,"app-language-selector",4)(6,"app-font-family-selector",5)(7,"app-wake-lock-enabled",6)(8,"app-render-history",7),e.TgZ(9,"div",8),e._UZ(10,"app-text-size",9)(11,"app-line-height",10),e.qZA()(),e.TgZ(12,"div")(13,"div",11),e.YNc(14,X,2,0,"div",12),e.TgZ(15,"button",13),e._uU(16," BUTTONS.cancel "),e.qZA(),e.TgZ(17,"button",14),e._uU(18," BUTTONS.saveAndClose "),e.qZA()(),e.TgZ(19,"div",15)(20,"div",16)(21,"label",17),e._uU(22,"SETTINGS.t1"),e.qZA()(),e.TgZ(23,"div",18),e.YNc(24,R,2,3,"div",19),e.YNc(25,P,2,3,"div",19),e.YNc(26,V,2,3,"div",19),e.TgZ(27,"div",20),e._uU(28," SETTINGS.p4 "),e.qZA()()()()()()(),e.TgZ(29,"app-unsaved-changes-dialog",21),e.NdJ("afterClosed",function(i){return n.modalClosed(i)}),e.qZA()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.formGroup),e.xp6(3),e.Q6J("group",n.formGroup),e.xp6(1),e.Q6J("group",n.formGroup),e.xp6(1),e.Q6J("group",n.formGroup),e.xp6(1),e.Q6J("group",n.formGroup),e.xp6(1),e.Q6J("group",n.formGroup),e.xp6(2),e.Q6J("group",n.formGroup),e.xp6(1),e.Q6J("group",n.formGroup),e.xp6(3),e.Q6J("ngIf",!n.acceptedCookies()),e.xp6(3),e.Q6J("disabled",!1===n.acceptedCookies()||n.formGroup.pristine),e.xp6(7),e.Q6J("ngIf",n.renderHistoryFormValue()>0),e.xp6(1),e.Q6J("ngIf",n.renderHistoryFormValue()>1),e.xp6(1),e.Q6J("ngIf",n.renderHistoryFormValue()>2),e.xp6(1),e.Q6J("classList",n.classList()+" live pt-3"),e.xp6(2),e.Q6J("openModal",n.showUnsavedChangesModal))},dependencies:[u.O5,s._Y,s.JL,s.sg,y.rH,p.Pi,x,E,H,w,z,_,q,B],data:{animation:[(0,S.QQ)(),(0,S.QP)()]}}),t})(),canDeactivate:[(t,a,o,n)=>t.canDeactivate?t.canDeactivate():confirm("You have unsaved changes, are you sure you want to leave?")]}];var j=r(9507),K=r(4410);let ee=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,N.e,s.UX,y.Bz.forChild(W),j.sQ.forFeature([K.t]),p.aw.forChild({extend:!0}),x]}),t})()}}]);