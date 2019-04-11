import $ from 'jquery';
import './style.scss';

class PageTimer {
  constructor(start) {
    this.elapsedTime = start;
  }

  startTimer() {
    setInterval(() => {
      this.displayTime();
      this.elapsedTime += 1;
    }, 1000);
  }

  displayTime() {
    $('#main').html(
      `You've been on this page for ${this.elapsedTime} seconds.`,
    );
  }
}

const pageTimer = new PageTimer(0);
pageTimer.startTimer();
