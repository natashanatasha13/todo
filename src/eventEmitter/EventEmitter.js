
class EventEmitter {
    constructor() {
      this.events = {};
    }
    on(name, listener) {
        console.log("on>>>", name)
      if (!this.events[name]) {
        this.events[name] = [];
      }
  
      this.events[name].push(listener);
      console.log('heren q')
    }
    removeListener(name, listenerToRemove) {
      if (!this.events[name]) {
        throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`);
      }
  
      const filterListeners = (listener) => listener !== listenerToRemove;
  
      this.events[name] = this.events[name].filter(filterListeners);
    }
    emit(name, ...data) {
        console.log("events", this.events)
      if (!this.events[name]) {
        throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
      }
  
      const fireCallbacks = (callback) => {
        callback(...data);
      };
  
      this.events[name].forEach(fireCallbacks);
    }
  
  }


  export const myEventEmitter = new EventEmitter();

 