import {
    it,
    describe,
    expect,
    inject,
    fakeAsync,
    afterEach,
    beforeEachProviders,
    tick,
} from 'angular2/testing';

import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';
import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions
} from 'angular2/http';

import {EventsService} from "../../src/events/services/events.service.ts";

describe("Test Event Service", () => {
    //inject all third Party Mock dependencies and configure providers
    beforeEachProviders(() => {
        return [
            BaseRequestOptions,
            MockBackend,
            EventsService,
            provide(Http, {
                useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                }, deps: [MockBackend, BaseRequestOptions]
            }),
        ]
    });

    it('retrieves using the event ID',
        inject([EventsService, MockBackend], fakeAsync((eventsService, mockBackend) => {
                var res;
                mockBackend.connections.subscribe(c => {
                    expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
                    let response = new ResponseOptions({body: '{"id": 1, "name": "Trip to Paris"}'});
                    c.mockRespond(new Response(response));
                });
                eventsService.get(1).subscribe((_res) => {
                    res = _res;
                });
                tick();
                expect(res.name).toBe('felipe');
            }
        ))
    );
});


