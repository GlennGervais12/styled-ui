webpackJsonp([0],{1308:function(t,e,n){var o=n(4),a=n(77),r=n(560).PageRenderer;r.__esModule&&(r=r.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1338)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,t.exports=s},1338:function(t,e){t.exports="A typeahead control with keyboard navigation.\n\n```hint|directive\nThese components require the [Faithlife Bootstrap base stylesheet](/bootstrap/stylesheet) to be loaded globally in your app.\n```\n\nSource: [`react-bootstrap-typeahead`](https://github.com/Faithlife/react-bootstrap-typeahead)\n\n[Component documentation](https://github.com/Faithlife/react-bootstrap-typeahead/blob/master/docs/Usage.md)\n[More component demos](http://ericgio.github.io/react-bootstrap-typeahead/)\n\n```\nimport { Typeahead } from '@faithlife/styled-ui/dist/text-input.js';\nimport '@faithlife/styled-ui/dist/text-input.css';\n```\n\n```react\nshowSource: true\nstate: { selection: '' }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Current selection: {state.selection}</Label>\n\t\t<Typeahead\n\t\t\tonChange={value => { setState({ selection: value })}}\n\t\t\toptions={['Washington','California','Texas']}\n\t\t\tplaceholder=\"Choose a state...\"\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n### Tags demo\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Current tags: {JSON.stringify(state.tags)}</Label>\n\t\t<Typeahead\n\t\t\tmultiple\n\t\t\tallowNew\n\t\t\tonChange={value => { setState({ tags: value })}}\n\t\t\toptions={['very cool','outrageous','slick']}\n\t\t\tplaceholder=\"Add some tags...\"\n\t\t\tnewSelectionPrefix=\"New entry: \"\n\t\t\tselectHintOnEnter\n\t\t/>\n\t</FormGroup>\n</div>\n```\n"}});
//# sourceMappingURL=0.ec2f9783.chunk.js.map