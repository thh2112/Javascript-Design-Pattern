class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(subject) {
    this.observers.forEach((observer) => observer.render(subject));
  }
}

class ProfileComponent extends Subject {
  constructor(profile) {
    super();
    this.profile = profile;
    this.name = "";
    this.url = "";
  }

  updateProfile(profile) {
    this.profile = profile;
    this.notify();
  }

  notify() {
    this.notifyObservers(this.profile);
  }
}

class Observer {
  subject = new Subject();

  render(subject) {}
}

class AvatarComponent extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
    this.subject.addObserver(this);
  }

  render(subject) {
    console.log(
      "Avatar component: ",
      `name: ${subject.name}, url: ${subject.url}`,
    );
  }
}

class NameComponent extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
    this.subject.addObserver(this);
  }

  render(subject) {
    console.log(
      "Name component: ",
      `name: ${subject.name}, url: ${subject.url}`,
    );
  }
}

const profile = new ProfileComponent({
  name: "Dev 1",
  url: "https://i.pravatar.cc/300",
});

const avatar = new AvatarComponent(profile);
const name = new NameComponent(profile);
console.log("----------------Update Profile-----------------");
profile.updateProfile({
  name: "Dev 2",
  url: "https://i.pravatar.cc/300",
});

console.log(
  "----------------After remove avatar observer and update Project-----------------",
);
profile.removeObserver(avatar);
profile.updateProfile({
  name: "Dev 3",
  url: "https://i.pravatar.cc/300",
});
