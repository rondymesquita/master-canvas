import EventBus from "js-event-bus";

export class Bus extends EventBus {
  static instance: Bus;
  // private bus;
  private constructor() {
    super();
  }

  static getInstance() {
    if (!Bus.instance) {
      Bus.instance = new Bus();
    }
    return Bus.instance;
  }
}
