webpackJsonp([2],{1586:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(12),a=n(22),s=n(286),o=(n.n(s),n(1649)),c=n(1602),l=n(285),u=n(1601),d=n(287),p=n(1610),h=n(1613),f=n(1614),y=n(1611),g=n(1612);n.d(e,"MICROSERVICE_NAME",(function(){return v})),n.d(e,"DsCaseModule",(function(){return m}));var v="cases",m=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getMicroserviceName=function(){return v},e})(u.a);m=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,a.a,s.NgxDatatableModule,d.a,o.a],declarations:[p.a,h.a,f.a,y.a,g.a],providers:[c.a,l.a,l.c]})],m)},1595:function(t,e,n){"use strict";var i=n(28),r=n(12),a=n(29),s=n(187),o=(n.n(s),n(77)),c=n(33),l=n(136),u=n(39),d=(n.n(u),n(23)),p=n.n(d);n.d(e,"a",(function(){return h}));var h=(function(){function t(t){this.injector=t,this.router=t.get(i.c),this.route=t.get(i.b),this.globalState=this.injector.get(o.a),this.appState=this.injector.get(c.a),this.location=t.get(r.Location),this.translate=t.get(a.c),this.toastr=t.get(s.ToastsManager),this.config=this.appState.get("config")}return t.prototype.ngOnInit=function(){this.pageTitle&&this.applyPageTitle(),this.isInitialized=!0},t.prototype.applyPageTitle=function(t){var e=this,n=t||this.pageTitle;n&&setTimeout((function(){e.globalState.notifyDataChanged("menu.activeLink",{title:n})}))},t.prototype.generateBackLink=function(){return this.entityParent&&(this.backLink||(this.backLink=new l.a),this.backLink.routerLink=["/","pages",this.entityParentUrlPrefix,this.entityParent.uuid,"show"],this.entityParent.hasOwnProperty("title")&&(this.backLink.text=this.entityParent.title[this.translate.currentLang])),this.backLink},t.prototype.getEmptyBackLink=function(){return new l.a},t.prototype.getTranslatedPropertyValue=function(t,e){if(p()(t))return p()(t[e])&&t[e][this.translate.currentLang]?t[e][this.translate.currentLang]:t[e]},t})()},1596:function(t,e,n){"use strict";var i=n(28),r=n(34),a=n(188),s=n(187),o=(n.n(s),n(29)),c=n(759),l=n(1595),u=n(39),d=(n.n(u),n(1));n.n(d);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n){var r=t.call(this,e)||this;return r.microserviceConfig=n,r.actions=[{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-primary btn-with-icon",iconClass:"ion-edit",visible:!0,routerLink:["../edit"],region:"header"},{name:"delete",title:"ds.microservices.entity.action.delete",class:"btn btn-danger btn-with-icon",iconClass:"ion-android-delete",visible:!0,region:"footer"}],r.entityMetadata={},r.router=r.injector.get(i.c),r.route=r.injector.get(i.b),r.translate=r.injector.get(o.c),r.modal=r.injector.get(a.c),r.toastr=r.injector.get(s.ToastsManager),r}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(t){e.lang=t.lang,e.updateTranslations(t.lang)})),this.prepareEntity().subscribe()},e.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&(this.languageChangeSubscriber.unsubscribe(),this.languageChangeSubscriber=void 0)},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){if(t.entity)return d.Observable.of({entity:t.entity,entityParent:t.entityParent});var n=e.id,i=e[t.entityParentUrlParam];return t.entityApiService.getOne(t.entityUrlPrefix,n).flatMap((function(e){return t.entity=e,t.onEntityPrepared(),t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return d.Observable.of({entity:e,entityParent:t})}))})).catch((function(e){throw e instanceof r.Response?t.onPrepareEntityError(e):console.warn("Unexpected error occurred while fetching entity: "+e),e}))}))},e.prototype.prepareEntityParent=function(t,e){var n=this;return t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return n.entityParent=t,n.generateBackLink(),d.Observable.of(t)})):d.Observable.of({})},e.prototype.onPrepareEntityError=function(t){var e=this.translate.instant("ds.messages.http."+t.status);this.toastr.error(e)},e.prototype.handleEntityEvent=function(t){switch(t.action.name){case"delete":this.onDelete();break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},e.prototype.onDelete=function(){var t=this,e=this.modal.open(c.a,{size:"lg"});e.componentInstance.modalHeader="Confirm",e.componentInstance.modalContent="Are you sure you want to delete this entity?",e.componentInstance.actions=[{command:"yes",label:"Yes"},{command:"no",label:"No"}],e.result.then((function(e){console.log(e),"yes"===e.command&&t.entity.remove().subscribe((function(e){t.onEntityDeleteSuccess(e)}),(function(e){t.onEntityDeleteError(e)}))}),(function(t){}))},e.prototype.updateTranslations=function(t){this.onEntityPrepared(),this.entityParent&&this.generateBackLink()},e.prototype.onEntityDeleteSuccess=function(t){console.log("Entity deleted successfully, server response: ",t),this.toastr.success("Entity deleted successfully"),this.router.navigate(["../../list"],{relativeTo:this.route})},e.prototype.onEntityDeleteError=function(t){console.error("Failed to delete entity",t),this.toastr.error("Failed to delete entity")},e.prototype.onEntityPrepared=function(){""!==this.pageTitle&&this.entity&&this.entity.title&&(this.entity.title.hasOwnProperty(this.translate.currentLang)?this.pageTitle=this.entity.title[this.translate.currentLang]:this.pageTitle=this.entity.title)},e.prototype.setActionVisibility=function(t,e){this.actions=this.actions.map((function(n){switch(n.name){case t:n.visible=e}return n}))},e})(l.a)},1597:function(t,e,n){"use strict";var i=n(292),r=n(66),a=n(1595),s=n(39),o=(n.n(s),n(1)),c=(n.n(o),n(761)),l=n.n(c),u=n(762),d=n.n(u),p=n(105),h=n.n(p),f=n(293),y=n.n(f);n.d(e,"a",(function(){return g}));var g=(function(t){function e(e,n){var a=t.call(this,e)||this;return a.injector=e,a.microserviceConfig=n,a.headerTitle="",a.headerSubtitle="",a.submitted=!1,a.formErrors={},a.entityMetadata={},a.active=!0,a.auth=e.get(r.a),a.staticTranslate=e.get(i.a),a}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.loadEntityMetaData(),this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(t){e.lang=e.translate.currentLang,e.updateTranslations(t.lang),e.prepareEntityParent()})),this.translate.getTranslation(this.translate.currentLang).subscribe((function(){e.formLang=e.translate.currentLang})),Object.keys(this.entityMetadata).forEach((function(t){e.formErrors[t]=""})),this.prepareEntity().subscribe()},e.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&this.languageChangeSubscriber.unsubscribe()},e.prototype.loadEntityMetaData=function(){this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties},e.prototype.onRouteParams=function(t){this.routeParams=t},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){var n=e.id,i=e[t.entityParentUrlParam];return t.onRouteParams(e),t.isNew?t.createBlankEntity().flatMap((function(e){return t.entity=e,t.onEntityPrepared(),t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return o.Observable.of({entity:e,entityParent:t})}))})):t.entityApiService.getOne(t.entityUrlPrefix,n).flatMap((function(e){return t.entity=e,t.onEntityPrepared(),t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return o.Observable.of({entity:e,entityParent:t})}))}))}))},e.prototype.prepareEntityParent=function(t,e){var n=this;return this.entityParent?(this.generateBackLink(),o.Observable.of(this.entityParent)):t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return n.entityParent=t,n.generateBackLink(),o.Observable.of(t)})):o.Observable.of(null)},e.prototype.createBlankEntity=function(){var t=this,e=(this.auth.getAuthUser(),{owner:"BusinessUnit",ownerUuid:"8454c987-cbc5-4a24-ba1a-d420283caabd",weight:0,version:1});return Object.keys(this.entityMetadata).forEach((function(n,i){var r=t.entityMetadata[n],a=r.hasOwnProperty("default")?r.default:"";r.hasOwnProperty("translated")&&!0===r.translated?(e[n]={},t.translate.langs.forEach((function(t){e[n][t]=a}))):e[n]=a})),o.Observable.of(e)},e.prototype.onEntityPrepared=function(){""!==this.pageTitle&&!this.isNew&&this.entity&&this.entity.title&&(this.entity.title.hasOwnProperty(this.translate.currentLang)&&this.entity.title[this.translate.currentLang].length>0?this.pageTitle=this.entity.title[this.translate.currentLang]:this.pageTitle=this.entity.title)},e.prototype.updateTranslations=function(t){this.onEntityPrepared()},e.prototype.displayFormErrors=function(t){if(void 0===t&&(t=!0),this.entityForm){var e=this.entityForm.form;for(var n in this.formErrors){this.formErrors[n]="";var i=e.get(n);if(i&&(i.dirty||t)&&!i.valid)for(var r in i.errors)this.setFormError(n,r)}}},e.prototype.onFormInit=function(t){this.currentForm=t},e.prototype.onFormChange=function(t){var e=this;this.currentForm!==this.entityForm&&(this.entityForm=this.currentForm,this.entityForm&&this.entityForm.valueChanges.subscribe((function(t){return e.onValueChanged(t)})))},e.prototype.onFormCancel=function(){this.location.back()},e.prototype.onFormLanguageChange=function(t){this.formLang=t.key},e.prototype.onFormSubmit=function(t){if(!t.valid)return this.displayFormErrors(),this.toastr.error(this.translate.instant("ds.messages.formInvalid")),!1;this.submitted=!0,this.isNew?this.saveNewEntity(t):this.saveExistingEntity(t)},e.prototype.onValueChanged=function(t){this.displayFormErrors(!1)},e.prototype.saveNewEntity=function(t){var e=this;try{var n=this.preSave(l()(this.entity));this.entityApiService.resource(this.entityUrlPrefix).post(n).subscribe((function(t){e.onEntitySave(t)}),(function(t){e.onEntitySaveError(t)}))}catch(t){console.warn("Error in saveNewEntity",t)}},e.prototype.saveExistingEntity=function(t){var e=this;try{var n=l()(this.entity.plain()),i=this.preSave(n),r=this.entityApiService.resource(this.entityUrlPrefix),a={"Content-Type":"application/json"};r.customPUT(i,this.entity.uuid,void 0,a).subscribe((function(t){e.onEntitySave(t)}),(function(t){e.onEntitySaveError(t)}))}catch(t){console.warn("Error in saveExistingEntity",t)}},e.prototype.preSave=function(t){var e=this,n=this.getPropertiesToRemoveOnSave();return t=d()(t,n),Object.keys(this.entityMetadata).forEach((function(i,r){var a=e.entityMetadata[i];n.indexOf(i)>-1||(a.hasOwnProperty("translated")&&!0===a.translated?e.translate.langs.forEach((function(n){if(t[i]&&y()(t[i][n])&&h()(t[i][n])&&delete t[i][n],a.hasOwnProperty("type")&&"json"===a.type)try{y()(t[i][n])&&(0===t[i][n].trim().length&&(t[i][n]="{}"),t[i][n]=JSON.parse(t[i][n]))}catch(t){throw e.setFormError(i,"json"),{type:"validation",property:i,field:a.type,language:n}}})):y()(t[i])&&a.hasOwnProperty("type")&&"json"===a.type&&(t[i]=JSON.parse(t[i])))})),console.log("sanitized entity",t),t},e.prototype.getPropertiesToRemoveOnSave=function(){return["@context","@id","@type","id","uuid","createdAt","updatedAt","deletedAt"]},e.prototype.setFormError=function(t,e){var n=this.entityMetadata[t].validation,i=n[e].hasOwnProperty("params")?n[e].params:null,r="ds.microservices.entity.validation."+n[e].message,a=this.staticTranslate.instant(this.formLang,r,i);this.formErrors[t]+=a+" "},e.prototype.getRoutingUrlOnSave=function(t){return[this.isNew?"../"+t.uuid:"../","show"]},e.prototype.onEntitySave=function(t){if(console.log("Entity saved successfully, server response: ",t),this.toastr.success(this.translate.instant("ds.messages.entitySaveSucceeded")),t.uuid){var e=this.getRoutingUrlOnSave(t);this.router.navigate(e,{relativeTo:this.route})}else this.toastr.error(this.translate.instant("ds.messages.unexpectedError"))},e.prototype.onEntitySaveError=function(t){console.error("There was an error saving entity",t);var e=this.translate.instant("ds.messages.entitySaveFailed"),n="";t.data&&t.data["hydra:description"]&&(n=t.data["hydra:description"]),this.toastr.error(n,e)},e})(a.a)},1598:function(t,e,n){"use strict";(function(t){var i=n(0),r=n(756),a=n(1600),s=n(1595),o=n(39),c=(n.n(o),n(39)),l=(n.n(c),n(106));n.n(l);n.d(e,"a",(function(){return u}));var u=(function(e){function i(t,n){var i=e.call(this,t)||this;return i.microserviceConfig=n,i.rows=[],i.columns=[],i.sorts=[],i.pager=new r.a,i.pagingMode=r.b.APPEND,i.size=10,i.scrollDebounceTime=1e3,i.timeSinceLastScroll=0,i.datatableAttributes={columnMode:"force",rowHeight:"auto",headerHeight:90,footerHeight:50,externalPaging:!0,externalSorting:!0},i.headerActions=[{name:"create",title:"ds.microservices.entity.action.create",class:"btn btn-primary btn-with-icon",iconClass:"ion-android-add-circle",visible:!0,routerLink:["../create"]},{name:"refresh",title:"ds.microservices.entity.action.refresh",class:"btn btn-secondary btn-with-icon",iconClass:"ion-android-refresh",visible:!1}],i.actions=[{name:"show",title:"ds.microservices.entity.action.show",class:"btn btn-default btn-with-icon",iconClass:"ion-eye",visible:!0},{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-default btn-with-icon",iconClass:"ion-edit",visible:!0}],i.filters={},i.filterStream=new c.Subject,i.entityMetadata={},i}return __extends(i,e),i.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(e){t.lang=e.lang,t.updateTranslations(e.lang)})),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.pager.size=this.size,this.setupUi(),this.setupList(),this.postSetupList(),this.setupQuery(),this.filterStream.distinctUntilChanged((function(t,e){return t.filterProperty===e.filterProperty&&t.filterValue===e.filterValue})).map((function(e){return t.assignFilterValue(e)})).debounceTime(500).subscribe((function(){return t.doFilter()})),this.setPage({offset:1})},i.prototype.ngOnDestroy=function(){this.languageChangeSubscriber.unsubscribe()},i.prototype.ngAfterViewInit=function(){},i.prototype.setupQuery=function(){this.query=a.a.forUrl(this.microserviceConfig.settings.entrypoint.url,this.entityUrlPrefix).withPager(this.pager)},i.prototype.setupUi=function(){},i.prototype.setupList=function(){},i.prototype.postSetupList=function(){this.updateTranslations(this.translate.currentLang)},i.prototype.refreshList=function(){var t=this;this.loading=!0,this.entityApiService.getList(this.query).subscribe((function(e){switch(t.pager=e.pager,t.pagingMode){case r.b.REPLACE:t.rows=t.preprocessRowsData(e.data);break;case r.b.APPEND:t.rows=t.rows.concat(t.preprocessRowsData(e.data))}t.loading=!1}))},i.prototype.handleHeaderEvent=function(t){var e=this.entityParentUrlPrefix?"../"+this.entityUrlPrefix:"../";switch(t.action.name){case"refresh":this.refreshList();break;case"create":this.router.navigate([e,"create"],{relativeTo:this.route});break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},i.prototype.preprocessRowsData=function(t){var e,n=this;return t&&(e=t.map((function(t){return t._={actions:n.actions},t})).filter((function(t){return t.hasOwnProperty("title")&&t.title.hasOwnProperty(n.translate.currentLang)}))),e},i.prototype.onFilterValueChange=function(t){var e=t.column.prop,n=t.event.target.value;this.filterStream.next({filterProperty:e,filterValue:n})},i.prototype.assignFilterValue=function(t){return console.log("assignFilterValue: ",t),this.filters[t.filterProperty]=t.filterValue,t},i.prototype.doFilter=function(){var t=this;Object.keys(this.filters).forEach((function(e){var i=t.filters[e];null==i||n.i(l.isString)(i)&&0===i.length?(delete t.filters[e],t.query.unsetFilter(e)):(t.filters[e]=i,t.query.setFilter(e,t.filters[e]))})),console.log(this.filters),this.refreshList()},i.prototype.setPage=function(t){this.pager.pageNumber=t.offset,this.refreshList()},i.prototype.removeItem=function(t){n.i(l.remove)(this.rows,t)},i.prototype.fetchNextPage=function(){this.pager.pageNumber<this.pager.totalPages&&this.setPage({offset:this.pager.pageNumber+1})},i.prototype.onSort=function(t){console.log("base-list.component::onSort",t),t.column.prop&&(this.query.unsetOrder(),this.query.setOrder(t.column.prop,t.newValue),this.refreshList())},i.prototype.onScrollDown=function(e){var n=(new Date).getTime();if(!this.loading&&n>this.timeSinceLastScroll+this.scrollDebounceTime){var i=t(document).height();(i-(t(window).height()+t(window).scrollTop()))/i==0&&(this.timeSinceLastScroll=n,this.fetchNextPage())}},i.prototype.updateTranslations=function(t){},i})(s.a);__decorate([n.i(i.ViewChild)("headerTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"headerTpl",void 0),__decorate([n.i(i.ViewChild)("textCellTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"textCellTpl",void 0),__decorate([n.i(i.ViewChild)("actionsTpl"),__metadata("design:type",i.TemplateRef)],u.prototype,"actionsCellTpl",void 0)}).call(e,n(10))},1599:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",(function(){return r}));var r=(function(){function t(){}return t})();r=__decorate([n.i(i.Component)({selector:"ds-entity",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r)},1600:function(t,e,n){"use strict";var i=n(756);n.d(e,"a",(function(){return r}));var r=(function(){function t(t){this.pager=new i.a,this.filters={},this.orders={},this.enableParamItemsPerPage=!0,this.path=t}return t.forUrl=function(e,n){var i=new t(n);return i.urlPrefix=e,i},t.prototype.withPath=function(t){return this.path=t,this},t.prototype.withFilter=function(t,e){return this.setFilter(t,e)},t.prototype.setFilter=function(t,e){return this.filters[t]=e,this},t.prototype.unsetFilter=function(t){delete this.filters[t]},t.prototype.withOrder=function(t,e){return this.setOrder(t,e)},t.prototype.setOrder=function(t,e){return this.orders[t]=e,this},t.prototype.unsetOrder=function(t){if(t)delete this.orders[t];else for(var e in this.orders)delete this.orders[e]},t.prototype.withPager=function(t){return this.pager=t,this},t.prototype.getFullPath=function(){return this.urlPrefix+this.path},t.prototype.buildParameters=function(){var t={};if(this.pager&&(Object.assign(t,{page:this.pager.pageNumber}),this.enableParamItemsPerPage&&(t.limit=this.pager.size)),this.filters&&Object.assign(t,this.filters),this.orders)for(var e in this.orders)t["order["+e+"]"]=this.orders[e];return t},t})()},1601:function(t,e,n){"use strict";var i=n(0),r=n(12),a=n(22),s=n(33),o=n(288),c=n(286),l=(n.n(c),n(757)),u=n(285);n.d(e,"a",(function(){return d}));var d=(function(){function t(t,e){this.appState=t,this.msConfig=e,this.microserviceName=null,e.name=this.getMicroserviceName(),e.settings=this.appState.get("microservices")[e.name]}return t})();d=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,a.a,o.a,l.b,c.NgxDatatableModule],declarations:[],providers:[u.a,u.c]}),__metadata("design:paramtypes",[s.a,u.a])],d)},1602:function(t,e,n){"use strict";var i=n(0),r=n(285),a=n(189),s=n(39);n.n(s);n.d(e,"a",(function(){return o}));var o=(function(t){function e(e){var n=t.call(this,e)||this;return n.restangular=e,n}return __extends(e,t),e})(a.a);o=__decorate([n.i(i.Injectable)(),__param(0,n.i(i.Inject)(r.d)),__metadata("design:paramtypes",[Object])],o)},1610:function(t,e,n){"use strict";var i=n(0),r=n(1599);n.d(e,"a",(function(){return a}));var a=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e})(r.a);a=__decorate([n.i(i.Component)({selector:"ds-case",template:"<router-outlet></router-outlet>"})],a)},1611:function(t,e,n){"use strict";var i=n(0),r=n(28),a=n(12),s=n(187),o=(n.n(s),n(29)),c=n(285),l=n(1602),u=n(1597),d=n(39);n.n(d);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n,i,r,a,s,o,c){var l=t.call(this,e,o)||this;return l.entityUrlPrefix="cases",l.headerTitle="Create Case",l.isNew=!0,l.translate=a,l.entityApiService=c,l}return __extends(e,t),e})(u.a);p=__decorate([n.i(i.Component)({selector:"ds-case-create",template:n(1643)}),__metadata("design:paramtypes",[i.Injector,r.b,r.c,a.Location,o.c,s.ToastsManager,c.a,l.a])],p)},1612:function(t,e,n){"use strict";var i=n(0),r=n(28),a=n(12),s=n(187),o=(n.n(s),n(29)),c=n(285),l=n(1602),u=n(1597),d=n(39);n.n(d);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n,i,r,a,s,o,c){var l=t.call(this,e,o)||this;return l.entityUrlPrefix="cases",l.headerTitle="Edit Case",l.isNew=!1,l.translate=a,l.entityApiService=c,l}return __extends(e,t),e})(u.a);p=__decorate([n.i(i.Component)({selector:"ds-case-edit",template:n(1643)}),__metadata("design:paramtypes",[i.Injector,r.b,r.c,a.Location,o.c,s.ToastsManager,c.a,l.a])],p)},1613:function(t,e,n){"use strict";var i=n(0),r=n(285),a=n(1602),s=n(1598),o=n(66),c=n(1660),l=n(39),u=(n.n(l),n(105)),d=n.n(u);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n,i,r){var a=t.call(this,e,n)||this;return a.auth=r,a.entityUrlPrefix="cases",a.pageTitle="general.menu.cases",a.entityApiService=i,a}return __extends(e,t),e.prototype.setupQuery=function(){t.prototype.setupQuery.call(this),this.query.setFilter("order[updatedAt]","desc");var e=this.auth.getAuthUser();if(e)if(e.extra&&!d()(e.extra.businessUnits)){var n=e.extra.businessUnits[0],i=c.a.getUuidFromUri(n);this.query.setFilter("ownerUuid",i)}else console.warn("No Business Units available for current AuthUser");else console.warn("AuthUser is not defined"),this.toastr.warning("AuthUser is not defined")},e})(s.a);p=__decorate([n.i(i.Component)({selector:"ds-case-list",template:n(1674)}),__metadata("design:paramtypes",[i.Injector,r.a,a.a,o.a])],p)},1614:function(t,e,n){"use strict";var i=n(0),r=n(1596),a=n(285),s=n(1602),o=n(136),c=n(39),l=(n.n(c),n(1));n.n(l);n.d(e,"a",(function(){return u}));var u=(function(t){function e(e,n,i){var r=t.call(this,e,n)||this;return r.injector=e,r.microserviceConfig=n,r.entityApiService=i,r.entityUrlPrefix="cases",r.headerTitle="Case Details",r.statuses=[],r.entityApiService=i,r}return __extends(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.backLink=new o.a(["/pages/cases"],"general.menu.cases")},e.prototype.prepareEntity=function(){var e=this;return t.prototype.prepareEntity.call(this).flatMap((function(t){e.loadingStatuses=!0;var n={"case.uuid":t.entity.uuid,"order[updatedAt]":"desc"};return e.entityApiService.resource("case-statuses").getList(n).subscribe((function(t){e.statuses=[],t.forEach((function(t){e.statuses.push(t)}))}),(function(){}),(function(){e.loadingStatuses=!1})),l.Observable.of({entity:t.entity,entityParent:t.entityParent})}))},e})(r.a);u=__decorate([n.i(i.Component)({selector:"ds-case-show",template:n(1675)}),__metadata("design:paramtypes",[i.Injector,a.a,s.a])],u)},1643:function(t,e){t.exports='<ds-entity-form *ngIf="entity"\n\t\t\t\t[entity]="entity"\n\t\t\t\t[headerTitle]="headerTitle"\n\t\t\t\t[isNew]="isNew"\n\t\t\t\t(onFormInit)="onFormInit($event)"\n\t\t\t\t(onFormChange)="onFormChange($event)"\n\t\t\t\t(onFormSubmit)="onFormSubmit($event)"\n\t\t\t\t(onFormCancel)="onFormCancel($event)"\n>\n\t<div class="card-block">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="title">{{ \'ds.microservices.entity.property.title\' | translate }}</label>\n\t\t\t\t\t<input id="title" name="title" type="text" [(ngModel)]="entity.title[lang]" class="form-control" placeholder="" required minlength="4">\n\t\t\t\t\t<div *ngIf="formErrors.title" class="alert alert-danger">\n\t\t\t\t\t\t{{ formErrors.title }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ds-entity-form>\n'},1649:function(t,e,n){"use strict";var i=n(28),r=n(289),a=n(1610),s=n(1613),o=n(1614),c=n(1611),l=n(1612);n.d(e,"a",(function(){return d}));var u=[{path:"",component:a.a,canActivate:[r.a],children:[{path:"",redirectTo:"/pages/cases/list",pathMatch:"full"},{path:"list",component:s.a},{path:"create",component:c.a},{path:":id/show",component:o.a},{path:":id/edit",component:l.a}]}],d=i.a.forChild(u)},1660:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=(function(){function t(){}return t.getUuidFromUri=function(t){var e=t.lastIndexOf("/");return e>0?t.slice(e+1):""},t})()},1674:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<div *ngIf="!loading && (rows.length === 0)" class="list-empty">{{ \'ds.messages.emptyList\' | translate }}</div>\n\n<div class="card container-fluid mt-5">\n\t<div class="row">\n\t\t<div class="col p-0">\n\t\t\t<div infiniteScroll (scrolled)="onScrollDown($event)" class="list-group simple-list infinite-scroll-list">\n\t\t\t\t<a *ngFor="let row of rows" [routerLink]="[\'..\', row.uuid, \'show\']" href="#" class="list-group-item justify-content-between has-left-icon m-0 mr-xs-4 ml-xs-4">\n\t\t\t\t\t<span class="left-icon pull-left fa {{ \'state-\' + row.state }}"></span>\n\t\t\t\t\t<div class="data-container d-inline-block w-100 pr-5">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t<h2 class="font-weight-normal mb-0">{{row.title | entityTranslate}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-sm-4 mt-2 mt-sm-0">\n\t\t\t\t\t\t\t\t\x3c!--<div class="small text-grayed-out v-center no-transform position-sm-right-0 position-relative position-sm-absolute">{{row.customId}}</div>--\x3e\n\t\t\t\t\t\t\t\t<div class="small text-grayed-out mt-2 mt-sm-0 v-center-sm float-sm-right position-right-sm-0">\n\t\t\t\t\t\t\t\t\t<span class="nowrap mr-4"><relative-time [timeInput]="row.createdAt"></relative-time></span>\n\t\t\t\t\t\t\t\t\t<span class="nowrap">{{row.customId}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!--<p class="lead mt-3 mb-0 pr-5">{{row.description | entityTranslate}}</p>--\x3e\n\t\t\t\t\t<span class="right-icon pull-right v-center"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<a [hidden]="loading || pager.pageNumber >= pager.totalPages"\n   class="btn btn-default"\n   (click)="fetchNextPage()">\n\t<i class="fa fa-chevron-circle-down"></i>\n\t<span>{{ \'general.more\' | translate }}</span>\n</a>\n\n<md-progress-spinner [hidden]="!loading" mode="indeterminate"></md-progress-spinner>\n\n'},1675:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<back-link *ngIf="backLink" [link]="backLink"></back-link>\n\n<md-progress-spinner [hidden]="entity" mode="indeterminate"></md-progress-spinner>\n\n<div *ngIf="entity" class="mt-4 mb-5">\n\t<div class="prop-set primary-props mb-4">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.customId\' | translate }}</dt>\n\t\t\t\t\t<dd>{{ entity.customId }}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.state\' | translate }}</dt>\n\t\t\t\t\t\x3c!--<dd [ngClass]="{\'text-success\': entity.state == \'open\', \'text-danger\': entity.state == \'closed\'}">--\x3e\n\t\t\t\t\t<dd>\n\t\t\t\t\t\t{{ \'ds.microservices.entity.property.\' + entity.state | translate }}\n\t\t\t\t\t</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl translate>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.createdAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.createdAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.updatedAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.updatedAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf="entity.data && (entity.data[lang] | isNotEmpty)" class="card entity-card additional-card animated fadeIn">\n\t\t<div class="card-header">\n\t\t\t<div class="row justify-content-between">\n\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t<h3 class="card-title mb-0">{{ \'ds.microservices.entity.property.data\' | translate }}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="card-block entity-body entity-data">\n\t\t\t<div class="row prop-set">\n\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t<pre>{{ entity.data[lang] | json }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\x3c!--<div class="row prop-set">--\x3e\n\t\t\t\t\x3c!--<dl *ngFor="let item of (entity.data | entityTranslate) | keyValue" class="col-sm-6">--\x3e\n\t\t\t\t\t\x3c!--<dt>{{ item.key }}</dt>--\x3e\n\t\t\t\t\t\x3c!--<dd>{{ item.value }}</dd>--\x3e\n\t\t\t\t\x3c!--</dl>--\x3e\n\t\t\t\x3c!--</div>--\x3e\n\t\t</div>\n\t</div>\n\n\t<md-progress-spinner [hidden]="!loadingStatuses" mode="indeterminate"></md-progress-spinner>\n\n\t<div [hidden]="loadingStatuses" class="card entity-card additional-card animated fadeIn">\n\t\t<div class="card-header">\n\t\t\t<div class="row justify-content-between">\n\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t<h3 class="card-title mb-0">{{ \'general.statusUpdates\' | translate }}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="card-block entity-body entity-data">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-sm-12">\n\n\t\t\t\t\t<div *ngIf="statuses.length === 0">\n\t\t\t\t\t\t{{ \'ds.messages.emptyList\' | translate }}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngFor="let status of statuses" class="well">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t<h4>{{ status.title[lang] }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t<div class="small float-sm-right mb-2 mb-sm-0">\n\t\t\t\t\t\t\t\t\t<relative-time [timeInput]="status.updatedAt"></relative-time>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t\t\t\t<p class="lead ws-pre-line mb-0">{{ status.description[lang] }}</p>\n\n\t\t\t\t\t\t\t\t<div *ngIf="status.data && (status.data[lang] | isNotEmpty)" class="mt-2">\n\t\t\t\t\t\t\t\t\t<a class="" data-toggle="collapse" href="#collapse-status-{{status.uuid}}" aria-expanded="false" aria-controls="collapse">\n\t\t\t\t\t\t\t\t\t\t{{ \'ds.microservices.entity.property.data\' | translate }}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div id="collapse-status-{{status.uuid}}" class="well collapse mb-0 pb-0">\n\t\t\t\t\t\t\t\t\t\t<pre>{{ status.data[lang] | json }}</pre>\n\t\t\t\t\t\t\t\t\t\t\x3c!--<div class="row prop-set">--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\x3c!--<dl *ngFor="let item of (status.data | entityTranslate) | keyValue" class="col-sm-12">--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--<dt>{{ item.key }}</dt>--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--<dd>{{ item.value }}</dd>--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\x3c!--</dl>--\x3e\n\t\t\t\t\t\t\t\t\t\t\x3c!--</div>--\x3e\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}});