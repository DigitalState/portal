webpackJsonp([3],{1621:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(9),s=i(20),o=i(298),a=(i.n(o),i(771)),c=i(1685),l=i(1635),u=i(297),p=i(1633),d=i(299),h=i(1665),m=i(1663),f=i(1662),g=i(1664);i.d(e,"MICROSERVICE_NAME",(function(){return y})),i.d(e,"DsTaskModule",(function(){return v}));var y="tasks",v=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getMicroserviceName=function(){return y},e})(p.a);v=__decorate([i.i(n.NgModule)({imports:[r.CommonModule,s.a,a.b,o.NgxDatatableModule,d.a,c.a],declarations:[h.a,m.a,f.a,g.a],providers:[l.a,u.a,u.c]})],v)},1626:function(t,e,i){"use strict";var n=i(27),r=i(9),s=i(19),o=i(138),a=(i.n(o),i(46)),c=i(28),l=i(1628),u=i(139),p=i(36),d=(i.n(p),i(24)),h=i.n(d);i.d(e,"a",(function(){return m}));var m=(function(t){function e(e){var i=t.call(this,e)||this;return i.injector=e,i.router=e.get(n.c),i.route=e.get(n.b),i.globalState=i.injector.get(a.a),i.appState=i.injector.get(c.a),i.location=e.get(r.Location),i.translate=e.get(s.c),i.toastr=e.get(o.ToastsManager),i.config=i.appState.get("config"),i}return __extends(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.isInitialized=!0},e.prototype.generateBackLink=function(){return this.entityParent&&(this.backLink||(this.backLink=new u.a),this.backLink.routerLink=["/","pages",this.entityParentUrlPrefix,this.entityParent.uuid,"show"],this.entityParent.hasOwnProperty("title")&&(this.backLink.text=this.entityParent.title[this.translate.currentLang])),this.backLink},e.prototype.getEmptyBackLink=function(){return new u.a},e.prototype.getTranslatedPropertyValue=function(t,e){if(h()(t))return h()(t[e])&&t[e][this.translate.currentLang]?t[e][this.translate.currentLang]:t[e]},e})(l.a)},1627:function(t,e,i){"use strict";var n=i(27),r=i(31),s=i(140),o=i(138),a=(i.n(o),i(19)),c=i(773),l=i(1626),u=i(36),p=(i.n(u),i(1));i.n(p);i.d(e,"a",(function(){return d}));var d=(function(t){function e(e,i){var r=t.call(this,e)||this;return r.microserviceConfig=i,r.actions=[{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-primary btn-with-icon",iconClass:"ion-edit",visible:!0,routerLink:["../edit"],region:"header"},{name:"delete",title:"ds.microservices.entity.action.delete",class:"btn btn-danger btn-with-icon",iconClass:"ion-android-delete",visible:!0,region:"footer"}],r.entityMetadata={},r.subscriptions={},r.router=r.injector.get(n.c),r.route=r.injector.get(n.b),r.translate=r.injector.get(a.c),r.modal=r.injector.get(s.c),r.toastr=r.injector.get(o.ToastsManager),r}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.lang=this.translate.currentLang,this.subscriptions.lang=this.translate.onLangChange.subscribe((function(t){e.lang=t.lang,e.updateTranslations(t.lang),e.subscriptions.entity=e.prepareEntity().subscribe((function(t){return e.prepareEntitySubscriptionHandler(t)}))})),this.subscriptions.entity=this.prepareEntity().subscribe((function(t){return e.prepareEntitySubscriptionHandler(t)}))},e.prototype.ngOnDestroy=function(){var t=this;Object.keys(this.subscriptions).forEach((function(e){return t.subscriptions[e].unsubscribe()})),this.subscriptions=void 0},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){if(t.entity)return p.Observable.of({entity:t.entity,entityParent:t.entityParent});var i=e.id,n=e[t.entityParentUrlParam];return t.entityApiService.getOne(t.entityUrlPrefix,i).flatMap((function(e){return t.entity=e,t.prepareEntityParent(t.entityParentUrlPrefix,n).flatMap((function(t){return p.Observable.of({entity:e,entityParent:t})}))})).catch((function(e){throw e instanceof r.Response?t.onPrepareEntityError(e):console.warn("Unexpected error occurred while fetching entity: "+e),e}))}))},e.prototype.prepareEntityParent=function(t,e){var i=this;return t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return i.entityParent=t,i.generateBackLink(),p.Observable.of(t)})):p.Observable.of({})},e.prototype.onPrepareEntityError=function(t){var e=this.translate.instant("ds.messages.http."+t.status);this.toastr.error(e)},e.prototype.handleEntityEvent=function(t){switch(t.action.name){case"delete":this.onDelete();break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},e.prototype.onDelete=function(){var t=this,e=this.modal.open(c.a,{size:"lg"});e.componentInstance.modalHeader="Confirm",e.componentInstance.modalContent="Are you sure you want to delete this entity?",e.componentInstance.actions=[{command:"yes",label:"Yes"},{command:"no",label:"No"}],e.result.then((function(e){console.log(e),"yes"===e.command&&t.entity.remove().subscribe((function(e){t.onEntityDeleteSuccess(e)}),(function(e){t.onEntityDeleteError(e)}))}),(function(t){}))},e.prototype.updateTranslations=function(t){this.onEntityPrepared(),this.entityParent&&this.generateBackLink()},e.prototype.onEntityDeleteSuccess=function(t){console.log("Entity deleted successfully, server response: ",t),this.toastr.success("Entity deleted successfully"),this.router.navigate(["../../list"],{relativeTo:this.route})},e.prototype.onEntityDeleteError=function(t){console.error("Failed to delete entity",t),this.toastr.error("Failed to delete entity")},e.prototype.prepareEntitySubscriptionHandler=function(t){this.onEntityPrepared(t),this.setBreadcrumbData(),this.commitBreadcrumb()},e.prototype.onEntityPrepared=function(t){""!==this.pageTitle&&t.entity&&t.entity.title&&(t.entity.title.hasOwnProperty(this.translate.currentLang)?this.pageTitle=t.entity.title[this.translate.currentLang]:this.pageTitle=t.entity.title)},e.prototype.setBreadcrumbData=function(){this.entity&&(this.pageBreadcrumbData.title=this.entity.title,this.pageBreadcrumbData.tags=["crud-show"])},e.prototype.setActionVisibility=function(t,e){this.actions=this.actions.map((function(i){switch(i.name){case t:i.visible=e}return i}))},e})(l.a)},1628:function(t,e,i){"use strict";var n=i(0),r=i(27),s=i(9),o=i(300),a=i(192),c=i(46);i.d(e,"a",(function(){return l}));var l=(function(){function t(t){this.injector=t,this.pageBreadcrumbData={},this.route=this.injector.get(r.b),this.location=this.injector.get(s.Location),this.staticTranslate=this.injector.get(o.a),this.globalState=this.injector.get(c.a),this.breadcrumbService=this.injector.get(a.a)}return t.prototype.ngOnInit=function(){this.pageTitle&&this.applyPageTitle(),this.setBreadcrumbData()},t.prototype.applyPageTitle=function(t){var e=this,i=t||this.pageTitle;i&&setTimeout((function(){e.globalState.notifyDataChanged("menu.activeLink",{title:i})}))},t.prototype.setBreadcrumbData=function(){this.pageTitle&&(this.pageBreadcrumbData.title=this.pageTitle)},t.prototype.buildBreadcrumb=function(){var t=this.location.path().split("/").slice(2,3).map((function(t){return"path-"+t}));return{title:"string"==typeof this.pageBreadcrumbData.title?this.staticTranslate.instantAll(this.pageBreadcrumbData.title):this.pageBreadcrumbData.title,subtitle:"string"==typeof this.pageBreadcrumbData.subtitle?this.staticTranslate.instantAll(this.pageBreadcrumbData.subtitle):this.pageBreadcrumbData.subtitle,link:this.location.path(),tags:[].concat(t,this.pageBreadcrumbData.tags),routeData:this.route.snapshot.data}},t.prototype.commitBreadcrumb=function(t,e){t||(t=this.buildBreadcrumb()),this.breadcrumbService.push(t,e)},t})();l=__decorate([i.i(n.Component)({}),__metadata("design:paramtypes",[n.Injector])],l)},1630:function(t,e,i){"use strict";(function(t){var n=i(0),r=i(31),s=i(770),o=i(1632),a=i(1626),c=i(36),l=(i.n(c),i(36)),u=(i.n(l),i(107));i.n(u);i.d(e,"a",(function(){return p}));var p=(function(e){function n(t,i){var n=e.call(this,t)||this;return n.microserviceConfig=i,n.rows=[],n.columns=[],n.sorts=[],n.pager=new s.a,n.pagingMode=s.b.APPEND,n.size=10,n.scrollDebounceTime=1e3,n.timeSinceLastScroll=0,n.datatableAttributes={columnMode:"force",rowHeight:"auto",headerHeight:90,footerHeight:50,externalPaging:!0,externalSorting:!0},n.headerActions=[{name:"create",title:"ds.microservices.entity.action.create",class:"btn btn-primary btn-with-icon",iconClass:"ion-android-add-circle",visible:!0,routerLink:["../create"]},{name:"refresh",title:"ds.microservices.entity.action.refresh",class:"btn btn-secondary btn-with-icon",iconClass:"ion-android-refresh",visible:!1}],n.actions=[{name:"show",title:"ds.microservices.entity.action.show",class:"btn btn-default btn-with-icon",iconClass:"ion-eye",visible:!0},{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-default btn-with-icon",iconClass:"ion-edit",visible:!0}],n.filters={},n.filterStream=new l.Subject,n.entityMetadata={},n}return __extends(n,e),n.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(e){t.lang=e.lang,t.updateTranslations(e.lang)})),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.pager.size=this.size,this.setupUi(),this.setupList(),this.postSetupList(),this.setupQuery(),this.filterStream.distinctUntilChanged((function(t,e){return t.filterProperty===e.filterProperty&&t.filterValue===e.filterValue})).map((function(e){return t.assignFilterValue(e)})).debounceTime(500).subscribe((function(){return t.doFilter()})),this.setPage({offset:1}),this.pageBreadcrumbData.title=this.pageTitle,this.pageBreadcrumbData.tags=["crud-list"]},n.prototype.ngOnDestroy=function(){this.languageChangeSubscriber.unsubscribe()},n.prototype.ngAfterViewInit=function(){this.commitBreadcrumb()},n.prototype.setupQuery=function(){this.query=o.a.forUrl(this.microserviceConfig.settings.entrypoint.url,this.entityUrlPrefix).withPager(this.pager)},n.prototype.setupUi=function(){},n.prototype.setupList=function(){},n.prototype.postSetupList=function(){this.updateTranslations(this.translate.currentLang)},n.prototype.refreshList=function(){var t=this;this.loading=!0,this.entityApiService.getList(this.query).subscribe((function(e){switch(t.pager=e.pager,t.pagingMode){case s.b.REPLACE:t.rows=t.preprocessRowsData(e.data);break;case s.b.APPEND:t.rows=t.rows.concat(t.preprocessRowsData(e.data))}t.loading=!1}),(function(e){e instanceof r.Response?t.handleListRefreshError(e):console.error("Unexpected error occurred while fetching list: ",e),t.loading=!1}))},n.prototype.handleListRefreshError=function(t){if(!this.listRefershErrorToastrPromise){var e=this.translate.instant("ds.messages.http."+t.status),i=t.json(),n=i&&i.error?i.error:"";this.listRefershErrorToastrPromise=this.toastr.error(n,e,{dismiss:"click"})}},n.prototype.handleHeaderEvent=function(t){var e=this.entityParentUrlPrefix?"../"+this.entityUrlPrefix:"../";switch(t.action.name){case"refresh":this.refreshList();break;case"create":this.router.navigate([e,"create"],{relativeTo:this.route});break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},n.prototype.preprocessRowsData=function(t){var e,i=this;return t&&(e=t.map((function(t){return t._={actions:i.actions},t})).filter((function(t){return t.hasOwnProperty("title")&&t.title.hasOwnProperty(i.translate.currentLang)}))),e},n.prototype.onFilterValueChange=function(t){var e=t.column.prop,i=t.event.target.value;this.filterStream.next({filterProperty:e,filterValue:i})},n.prototype.assignFilterValue=function(t){return console.log("assignFilterValue: ",t),this.filters[t.filterProperty]=t.filterValue,t},n.prototype.doFilter=function(){var t=this;Object.keys(this.filters).forEach((function(e){var n=t.filters[e];null==n||i.i(u.isString)(n)&&0===n.length?(delete t.filters[e],t.query.unsetFilter(e)):(t.filters[e]=n,t.query.setFilter(e,t.filters[e]))})),console.log(this.filters),this.refreshList()},n.prototype.setPage=function(t){this.pager.pageNumber=t.offset,this.refreshList()},n.prototype.removeItem=function(t){i.i(u.remove)(this.rows,t)},n.prototype.fetchNextPage=function(){this.pager.pageNumber<this.pager.totalPages&&this.setPage({offset:this.pager.pageNumber+1})},n.prototype.onSort=function(t){console.log("base-list.component::onSort",t),t.column.prop&&(this.query.unsetOrder(),this.query.setOrder(t.column.prop,t.newValue),this.refreshList())},n.prototype.onScrollDown=function(e){var i=(new Date).getTime();if(!this.loading&&i>this.timeSinceLastScroll+this.scrollDebounceTime){var n=t(document).height();(n-(t(window).height()+t(window).scrollTop()))/n==0&&(this.timeSinceLastScroll=i,this.fetchNextPage())}},n.prototype.updateTranslations=function(t){},n})(a.a);__decorate([i.i(n.ViewChild)("headerTpl"),__metadata("design:type",n.TemplateRef)],p.prototype,"headerTpl",void 0),__decorate([i.i(n.ViewChild)("textCellTpl"),__metadata("design:type",n.TemplateRef)],p.prototype,"textCellTpl",void 0),__decorate([i.i(n.ViewChild)("actionsTpl"),__metadata("design:type",n.TemplateRef)],p.prototype,"actionsCellTpl",void 0)}).call(e,i(10))},1631:function(t,e,i){"use strict";var n=i(0);i.d(e,"a",(function(){return r}));var r=(function(){function t(){}return t})();r=__decorate([i.i(n.Component)({selector:"ds-entity",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r)},1632:function(t,e,i){"use strict";var n=i(770);i.d(e,"a",(function(){return r}));var r=(function(){function t(t){this.pager=new n.a,this.filters={},this.orders={},this.enableParamItemsPerPage=!0,this.path=t}return t.forUrl=function(e,i){var n=new t(i);return n.urlPrefix=e,n},t.prototype.withPath=function(t){return this.path=t,this},t.prototype.withFilter=function(t,e){return this.setFilter(t,e)},t.prototype.setFilter=function(t,e){return this.filters[t]=e,this},t.prototype.unsetFilter=function(t){delete this.filters[t]},t.prototype.withOrder=function(t,e){return this.setOrder(t,e)},t.prototype.setOrder=function(t,e){return this.orders[t]=e,this},t.prototype.unsetOrder=function(t){if(t)delete this.orders[t];else for(var e in this.orders)delete this.orders[e]},t.prototype.withPager=function(t){return this.pager=t,this},t.prototype.getFullPath=function(){return this.urlPrefix+this.path},t.prototype.buildParameters=function(){var t={};if(this.pager&&(Object.assign(t,{page:this.pager.pageNumber}),this.enableParamItemsPerPage&&(t.limit=this.pager.size)),this.filters&&Object.assign(t,this.filters),this.orders)for(var e in this.orders)t["order["+e+"]"]=this.orders[e];return t},t})()},1633:function(t,e,i){"use strict";var n=i(0),r=i(9),s=i(20),o=i(28),a=i(301),c=i(298),l=(i.n(c),i(771)),u=i(297);i.d(e,"a",(function(){return p}));var p=(function(){function t(t,e){this.appState=t,this.msConfig=e,this.microserviceName=null,e.name=this.getMicroserviceName(),e.settings=this.appState.get("microservices")[e.name]}return t})();p=__decorate([i.i(n.NgModule)({imports:[r.CommonModule,s.a,a.a,l.b,c.NgxDatatableModule],declarations:[],providers:[u.a,u.c]}),__metadata("design:paramtypes",[o.a,u.a])],p)},1635:function(t,e,i){"use strict";var n=i(0),r=i(297),s=i(193),o=i(36);i.n(o);i.d(e,"a",(function(){return a}));var a=(function(t){function e(e){var i=t.call(this,e)||this;return i.restangular=e,i}return __extends(e,t),e})(s.a);a=__decorate([i.i(n.Injectable)(),__param(0,i.i(n.Inject)(r.d)),__metadata("design:paramtypes",[Object])],a)},1662:function(t,e,i){"use strict";var n=i(0),r=i(27),s=i(9),o=i(31),a=i(140),c=i(138),l=(i.n(c),i(297)),u=i(91),p=i(1635),d=i(1627),h=i(36),m=(i.n(h),i(1)),f=(i.n(m),i(141)),g=(i.n(f),i(90)),y=i.n(g),v=i(139);i.d(e,"a",(function(){return b}));var b=(function(t){function e(e,i,r,s,o,a,c,l,u){var p=t.call(this,e,o)||this;return p.injector=e,p.route=i,p.http=r,p.location=s,p.microserviceConfig=o,p.entityApiService=a,p.cms=c,p.modal=l,p.toastr=u,p.entityUrlPrefix="tasks",p.headerTitle="general.menu.tasks",p.headerSubtitle=null,p.isActivated=!1,p.isFormRendered=!1,p.applyPageTitle(),p.backLink=new v.a(["..","show"],"ds.microservices.entity.types.task"),p.formioLanguageEmitter=new n.EventEmitter,p}return __extends(e,t),e.prototype.prepareEntity=function(){var e=this;return t.prototype.prepareEntity.call(this).flatMap((function(t){return e.activate(),m.Observable.empty()}))},e.prototype.activate=function(){var t=this;if(!this.isActivated){this.isActivated=!0;var e=this.entity.uuid;this.entityApiService.one("tasks",e).customGET("form").subscribe((function(e){t.formioOptions={i18n:{}},t.cms.getFormioFormTranslations(e.id).subscribe((function(e){y()(e)||(t.formioOptions.i18n=e)}),(function(t){console.warn("Error while fetching form translations",t)}),(function(){t.formioFormSchema={components:e.schema}}))}),(function(e){t.handleActivationRequestError(e)}))}},e.prototype.switchFormLanguage=function(t){this.formioLanguageEmitter.emit(t)},e.prototype.navigateBack=function(){this.location.back()},e.prototype.onFormioFormRender=function(t){this.isFormRendered=!0,this.switchFormLanguage(this.translate.currentLang)},e.prototype.onFormioFormSubmit=function(t){var e=this,i={data:t.data};this.entityApiService.one("tasks",this.entity.uuid).customPUT(i,"submission").subscribe((function(t){e.status="success",e.statusMessage="ds.microservices.entity.task.submissionSuccess"}),(function(t){e.handleSubmissionRequestError(t)}))},e.prototype.onFormioFormInvalid=function(t){console.log("onFormioFormInvalid: ",t)},e.prototype.handleActivationRequestError=function(t){this.status="failure";try{var e=i.i(f.isFunction)(t.json)?t.json():null;e&&e.message&&(this.toastr.error(e.message),this.statusMessage=e.message)}catch(t){this.statusMessage="ds.microservices.entity.task.activationFailure"}},e.prototype.handleSubmissionRequestError=function(t){this.status="failure";try{var e=i.i(f.isFunction)(t.json)?t.json():null;e&&e.message&&(this.toastr.error(e.message),this.statusMessage=e.message)}catch(t){this.statusMessage="ds.microservices.entity.task.submissionFailure"}},e})(d.a);b=__decorate([i.i(n.Component)({selector:"ds-task-activate",template:i(1713)}),__metadata("design:paramtypes",[n.Injector,r.b,o.Http,s.Location,l.a,p.a,u.a,a.c,c.ToastsManager])],b)},1663:function(t,e,i){"use strict";var n=i(0),r=i(140),s=i(297),o=i(303),a=i(774),c=i(1635),l=i(1630),u=i(36),p=(i.n(u),i(1));i.n(p);i.d(e,"a",(function(){return d}));var d=(function(t){function e(e,i,n,r,s){var o=t.call(this,e,i)||this;return o.formioApiService=r,o.modal=s,o.entityUrlPrefix="tasks",o.pageTitle="general.menu.tasks",o.entityApiService=n,o.formioApiService.setEntityApiService(n),o}return __extends(e,t),e.prototype.ngOnDestroy=function(){this.formioModal&&this.formioModal.close(),t.prototype.ngOnDestroy.call(this)},e.prototype.setupQuery=function(){t.prototype.setupQuery.call(this),this.query.setFilter("order[priority]","desc")},e.prototype.preprocessRowsData=function(t){var e,i=this;return t&&(e=t.map((function(t){return t._={actions:i.actions},t}))),e},e.prototype.activateFormioForm=function(t){this.openModalIFrame(t)},e.prototype.openModalIFrame=function(t){this.selectedRow=t;var e={size:"lg",windowClass:"formio-modal-frame"},i=[this.getTranslatedPropertyValue(this.selectedRow,"title")];this.formioModal=this.modal.open(a.a,e),this.iFrameModalComponent=this.formioModal.componentInstance,this.iFrameModalComponent.setFormioController(this),this.iFrameModalComponent.setBreadcrumbs(i)},e.prototype.requestFormioForm=function(){return this.formioApiService.getForm("tasks",this.selectedRow.uuid)},e.prototype.submitFormioForm=function(t){var e=this;return this.formioApiService.submitFormUsingPut("tasks",this.selectedRow.uuid,t,"submission").flatMap((function(t){return e.formioModal.close(),e.toastr.success(e.translate.instant("ds.microservices.entity.task.submissionSuccess")),e.removeItem({uuid:e.selectedRow.uuid}),p.Observable.of(t)}))},e.prototype.handleFormioFormEvent=function(t,e){},e})(l.a);d=__decorate([i.i(n.Component)({selector:"ds-task-list",template:i(1714)}),__metadata("design:paramtypes",[n.Injector,s.a,c.a,o.a,r.c])],d)},1664:function(t,e,i){"use strict";var n=i(0),r=i(297),s=i(303),o=i(774),a=i(1627),c=i(1635),l=i(139),u=i(36),p=(i.n(u),i(1));i.n(p);i.d(e,"a",(function(){return d}));var d=(function(t){function e(e,i,n,r){var s=t.call(this,e,i)||this;return s.formioApiService=r,s.entityUrlPrefix="tasks",s.entityApiService=n,s.formioApiService.setEntityApiService(n),s}return __extends(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.backLink=new l.a(["/pages/tasks"],"general.menu.tasks")},e.prototype.ngOnDestroy=function(){this.formioModal&&this.formioModal.close(),t.prototype.ngOnDestroy.call(this)},e.prototype.activateFormioForm=function(){this.openModalIFrame()},e.prototype.openModalIFrame=function(){var t={size:"lg",windowClass:"formio-modal-frame"},e=[this.getTranslatedPropertyValue(this.entity,"title")];this.formioModal=this.modal.open(o.a,t),this.iFrameModalComponent=this.formioModal.componentInstance,this.iFrameModalComponent.setFormioController(this),this.iFrameModalComponent.setBreadcrumbs(e)},e.prototype.requestFormioForm=function(){return this.formioApiService.getForm("tasks",this.entity.uuid)},e.prototype.submitFormioForm=function(t){var e=this;return this.formioApiService.submitFormUsingPost("tasks",this.entity.uuid,t).flatMap((function(t){return e.formioModal.close(),e.toastr.success(e.translate.instant("ds.microservices.entity.task.submissionSuccess")),p.Observable.of(t)}))},e.prototype.handleFormioFormEvent=function(t,e){},e})(a.a);d=__decorate([i.i(n.Component)({selector:"ds-task-show",template:i(1715)}),__metadata("design:paramtypes",[n.Injector,r.a,c.a,s.a])],d)},1665:function(t,e,i){"use strict";var n=i(0),r=i(1631);i.d(e,"a",(function(){return s}));var s=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e})(r.a);s=__decorate([i.i(n.Component)({selector:"ds-task",template:"<router-outlet></router-outlet>"})],s)},1685:function(t,e,i){"use strict";var n=i(27),r=i(1665),s=i(1663),o=i(1662),a=i(1664);i.d(e,"a",(function(){return l}));var c=[{path:"",component:r.a,children:[{path:"",redirectTo:"/pages/tasks/list",pathMatch:"full"},{path:"list",component:s.a},{path:":id/activate",component:o.a},{path:":id/show",component:a.a}]}],l=n.a.forChild(c)},1713:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<back-link *ngIf="backLink" [link]="backLink"></back-link>\n\n<div class="card">\n\t\x3c!--<div class="card-header">--\x3e\n\t\t\x3c!--<h3 class="card-title" translate>general.menu.scenario_activation</h3>--\x3e\n\t\x3c!--</div>--\x3e\n\n\t<div class="card-block">\n\t\t<div class="switcher-container clearfix">\n\t\t\t<ds-language-switcher-dropdown\n\t\t\t\t\t*ngIf="isFormRendered && !status"\n\t\t\t\t\tclass="float-right"\n\t\t\t\t\t(onLanguageChange)="switchFormLanguage($event)">\n\t\t\t</ds-language-switcher-dropdown>\n\t\t</div>\n\n\t\t<md-progress-spinner [hidden]="isFormRendered || status" mode="indeterminate"></md-progress-spinner>\n\n\t\t<formio\n\t\t\t\tclass="formio"\n\t\t\t\t[form]="formioFormSchema"\n\t\t\t\t[options]="formioOptions"\n\t\t\t\t[language]="formioLanguageEmitter"\n\t\t\t\t[hidden]="status"\n\t\t\t\t(submit)="onFormioFormSubmit($event)"\n\t\t\t\t(render)="onFormioFormRender($event)"\n\t\t\t\t(invalid)="onFormioFormInvalid($event)"\n\t\t\t\t(error)="onFormioFormError($event)">\n\t\t</formio>\n\n\t\t<div *ngIf="status"\n\t\t\t class="status"\n\t\t\t [ngClass]="status"\n\t\t\t [innerHtml]="statusMessage | translate">\n\t\t</div>\n\t</div>\n</div>\n\n<div>\n\t<button class="btn btn-secondary" [routerLink]="[\'../../list\']">\x3c!-- back to the Service and Scenarios list --\x3e\n\t\t{{\'ds.microservices.entity.action.back\' | translate}}\n\t</button>\n</div>\n'},1714:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<div *ngIf="!loading && (rows.length === 0)" class="list-empty">{{ \'ds.messages.emptyList\' | translate }}</div>\n\n<div class="card container-fluid mt-5">\n\t<div class="row">\n\t\t<div class="col p-0">\n\t\t\t<div infiniteScroll (scrolled)="onScrollDown($event)" class="list-group simple-list infinite-scroll-list">\n\t\t\t\t<a *ngFor="let row of rows" (click)="activateFormioForm(row)" href="javascript:;" class="list-group-item justify-content-between has-left-icon m-0 mr-xs-4 ml-xs-4">\n\t\t\t\t\t<span class="left-icon pull-left fa fa-dot-circle-o" [ngClass]="{\'priority-high\': row.priority >= 80 }"></span>\n\t\t\t\t\t<div class="data-container d-inline-block w-100 pr-5">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-md-8">\n\t\t\t\t\t\t\t\t<h2 class="font-weight-normal mb-0">{{ row.title }}</h2>\n\t\t\t\t\t\t\t\t<div class="mt-2 text-grayed-out">\n\t\t\t\t\t\t\t\t\t<a class="fa fa-info-circle" [routerLink]="[\'..\', row.uuid, \'show\']"></a>\n\t\t\t\t\t\t\t\t\t<span class="small">\n\t\t\t\t\t\t\t\t\t\t{{ \'general.created\' | translate }}\n\t\t\t\t\t\t\t\t\t\t<relative-time [timeInput]="row.createdAt"></relative-time>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-4">\n\t\t\t\t\t\t\t\t\x3c!--<div class="small text-grayed-out v-center no-transform position-md-right-0 position-relative position-md-absolute">{{row.customId}}</div>--\x3e\n\t\t\t\t\t\t\t\t<div class="small text-grayed-out mt-0 v-center-md float-md-right position-right-md-0">\n\t\t\t\t\t\t\t\t\t<span class="nowrap">\n\t\t\t\t\t\t\t\t\t\t{{ \'general.due\' | translate }}\n\t\t\t\t\t\t\t\t\t\t<relative-time [timeInput]="row.dueAt"></relative-time>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="right-icon pull-right v-center"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<a [hidden]="loading || pager.pageNumber >= pager.totalPages"\n   class="btn btn-default"\n   (click)="fetchNextPage()">\n\t<i class="fa fa-chevron-circle-down"></i>\n\t<span>{{ \'general.more\' | translate }}</span>\n</a>\n\n<md-progress-spinner [hidden]="!loading" mode="indeterminate"></md-progress-spinner>\n'},1715:function(t,e){t.exports='<h1 class="al-title">{{ pageTitle | translate }}</h1>\n\n<back-link *ngIf="backLink" [link]="backLink"></back-link>\n\n<md-progress-spinner [hidden]="entity" mode="indeterminate"></md-progress-spinner>\n\n<div *ngIf="entity" class="mt-4 mb-5">\n\t<div class="prop-set primary-props mb-4">\n\t\t<div *ngIf="entity.description" class="row">\n\t\t\t<div class="col-sm-12">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.description\' | translate }}</dt>\n\t\t\t\t\t<dd class="ws-pre-line">{{ entity.description }}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl translate>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.createdAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.createdAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.followUpAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.followUpAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.dueAt\' | translate }}</dt>\n\t\t\t\t\t<dd><relative-time [timeInput]="entity.dueAt"></relative-time></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.priority\' | translate }}</dt>\n\t\t\t\t\t<dd>{{ entity.priority }}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row mt-4">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<a class="btn btn-primary"\n\t\t\t\t   (click)="activateFormioForm()"\n\t\t\t\t   href="javascript:;"\n\t\t\t\t   title="{{ \'ds.microservices.entity.action.activate\' | translate }}">\n\t\t\t\t\t{{ \'ds.microservices.entity.action.activate\' | translate }}\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'}});