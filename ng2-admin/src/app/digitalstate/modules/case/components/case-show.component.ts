import { Component, Injector } from '@angular/core';

import { DsBaseEntityShowComponent } from '../../../components/base-entity-show.component';
import { MicroserviceConfig } from '../../../../shared/providers/microservice.provider';
import { EntityApiService } from '../entity-api.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import isEmpty from 'lodash/isEmpty';

@Component({
    selector: 'ds-case-show',
    templateUrl: '../templates/show.template.html'
})
export class DsCaseShowComponent extends DsBaseEntityShowComponent {

    entityUrlPrefix = 'cases';
    headerTitle = 'Case Details';

    statuses: Array<any> = [];
    loadingStatuses: boolean;

    constructor(protected injector: Injector,
                protected microserviceConfig: MicroserviceConfig,
                protected entityApiService: EntityApiService) {

        super(injector, microserviceConfig);
        this.entityApiService = entityApiService;
    }

    protected prepareEntity(): Observable<{ entity: any, 'entityParent'?: any}> {
        return super.prepareEntity().flatMap(preparedObject => { // success
            this.loadingStatuses = true;

            let requestParams = {
                'case.uuid': preparedObject.entity.uuid,
                'order[updatedAt]': 'desc'
            };

            this.entityApiService.resource('case-statuses').getList(requestParams).subscribe(statusesData => {
                this.statuses = [];
                statusesData.forEach((status) => {
                    this.statuses.push(status);
                });
            }, () => { // error

            }, () => { // complete
                this.loadingStatuses = false;
            });

            return Observable.of({'entity': preparedObject.entity, 'entityParent': preparedObject.entityParent});
        });
    }
}
