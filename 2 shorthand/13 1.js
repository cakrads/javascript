// 13. Destructuring Assignment Shorthand
// here our props in react
props = { title: "Danau Toba", ratePlace: 9.9 };

// usually we use like this in react:
return (<div> {this.props.title} with rate: {this.props.ratePlace}</div>)
// it will to long to always write 'this.props.title' when we need it

// so we can define it first like this:
const { title, ratePlace, reviewers = 83487 } = this.props;
return (<div> {title} with rate: {ratePlace} ({reviewers})</div>)
// we can also set default parameter