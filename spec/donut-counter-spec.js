describe('DonutCounter', function() {
  beforeEach(function() {
    loadFixtures('index.html');
    var donutCounter = new DonutCounter();
  });

  describe('adding and subtracting buttons', function() {
    it('can add donuts', function() {
      $('#donuts button').first().click();
      expect($('#donuts h3 span').text()).toBe('1');
    });

    it('can remove donuts if there are more than zero', function() {
      $('#donuts button').first().click();
      $('#donuts button').first().click();
      $('#donuts button').last().click();
      expect($('#donuts h3 span').text()).toBe('1');
      $('#donuts button').last().click();
      $('#donuts button').last().click();
      expect($('#donuts h3 span').text()).toBe('0');
    });

    it('can add guests', function() {
      $('#guests button').first().click();
      expect($('#guests h3 span').text()).toBe('1');
    });

    it('can remove guests if there are more than zero', function() {
      $('#guests button').first().click();
      $('#guests button').first().click();
      $('#guests button').last().click();
      expect($('#guests h3 span').text()).toBe('1');
      $('#guests button').last().click();
      $('#guests button').last().click();
      expect($('#guests h3 span').text()).toBe('0');
    });
  });

  describe('calculating donuts to guests', function() {
    it('knows if there are too few donuts', function() {
      $('#guests button').first().click();
      $('#check button').click();
      expect($('#status').text()).toBe('Guests are sad :(');
    });

    it('knows if there are no guests and no donuts', function() {
      $('#check button').click();
      expect($('#status').text()).toBe('Invite someone you jerk!');
    });

    it('knows if there are no guests', function() {
      $('#donuts button').first().click();
      $('#check button').click();
      expect($('#status').text()).toBe('Invite someone you jerk!');
    });

    it('knows if there are enough donuts', function() {
      $('#donuts button').first().click();
      $('#guests button').first().click();
      $('#check button').click();
      expect($('#status').text()).toBe('Guests are having a blast!');
    });

    it('knows if there are too many donuts', function() {
      $('#donuts button').first().click();
      $('#donuts button').first().click();
      $('#donuts button').first().click();
      $('#donuts button').first().click();
      $('#donuts button').first().click();
      $('#guests button').first().click();
      $('#check button').click();
      expect($('#status').text()).toBe('ARE YOU TRYING TO KILL US ALL!?');
    });
  });
});