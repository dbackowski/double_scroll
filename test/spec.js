describe("Test doubleScroll", function() {
  it("show scroller on top of element", function() {
    chai.assert.equal($("#double-scroll").is(":visible"), true);
  });

  it("moving top scroller move down scroller too", function(done) {
    $(".scroll-wrapper").scrollLeft(20);
    setTimeout(function() {
      chai.assert.equal($('.table-responsive').scrollLeft(), 20);
      done();
    }, 10);
  });

  it("hide top scroller when down scroller is hidden", function(done) {
    $('.table-responsive').width('2000');
    $(window).trigger('resize');
    setTimeout(function() {
      chai.assert.equal($("#double-scroll").is(":visible"), false);
      done();
    }, 10);
  });
});