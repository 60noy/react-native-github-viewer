export default class Navigation{
  static navigate(screen,property){
  this.props.navigator.push({
    name: screen,
    passProps: {
      name: property
    }
  })
}
};
