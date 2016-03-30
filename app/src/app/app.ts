import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import CreatepostViewControl from '../viewcontrols/createpost/createpost.vc'
import SinglepostViewControl from '../viewcontrols/singlepost/singlepost.vc'
import DeleteViewViewControl from '../viewcontrols/deleteview/deleteview.vc'

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'create', view: CreatepostViewControl},
            { pattern: 'posts/:id', view: SinglepostViewControl},
            { pattern: 'delete/:id', view: DeleteViewViewControl}
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
