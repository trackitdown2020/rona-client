import React, { useState, useEffect } from 'react';
import { Transition, animated } from 'react-spring/renderprops'

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
  }

export default class TransitionsExample extends React.PureComponent {
    state = { items: [] }
  
    async componentDidMount() {
      this.t1 && clearTimeout(this.t1)
      this.t2 && clearTimeout(this.t2)
      this.t3 && clearTimeout(this.t3)
  
      this.setState({ items: ['Apples', 'Oranges', 'Bananas'].map(item => ({ title: item })) })
      this.t1 = setTimeout(
        () => this.setState({ items: ['Apples', 'Bananas'].map(item => ({ title: item })) }),
        1500
      )
      this.t2 = setTimeout(
        () => this.setState({ items: ['Apples', 'Oranges', 'Bananas'].map(item => ({ title: item })) }),
        3000
      )
      this.t3 = setTimeout(() => this.setState({ items: ['Kiwis'].map(item => ({ title: item })) }), 4500)
    }
  
    render() {
      return (
        <div
          style={{
            backgroundColor: '#70C1B3',
            overflow: 'hidden',
            cursor: 'pointer',
            margin: 0,
            padding: 0,
          }}
          onClick={() => this.componentDidMount()}>
          <Transition
            items={this.state.items}
            //initial={null}
            from={{ overflow: 'hidden', height: 0, opacity: 0 }}
            enter={{ height: 50, opacity: 1, background: '#28d79f' }}
            leave={{ height: 0, opacity: 0, background: '#c23369' }}
            update={{ background: '#28b4d7' }}
            trail={200}>
            {({title}) => styles => (
              <animated.div style={{ ...defaultStyles, ...styles }}>
                {title}
              </animated.div>
            )}
          </Transition>
        </div>
      )
    }
}

// const setIndex = (index, max, display) => {
//     if(index === max - display) {
//         return 0;
//     }
//     return index+1;
// }

// class AnimatedList extends React.Component {
//     constructor(props) {
//         super(props);
//         const { 
//             data=[],
//             displayItems=3
//         } = props;
//         this.state = {
//             index: 0,
//             displayedData: data.slice(0, displayItems)
//         }
//     }

//     componentDidMount() {
//         setInterval(() => {
//             const index = setIndex(this.state.index, this.props.data.length, this.props.displayItems);
//             this.setState({
//                 index
//             }, this.updateDisplayData)
//         }, 4000)
//     }

//     updateDisplayData() {
//         const { displayItems, data } = this.props;
//         console.log(this.state.index)
//         this.setState({
//             displayedData: data.slice(this.state.index, this.state.index+displayItems)
//         })
//     }

//     render() {
//         const { RenderList, RenderListItem } = this.props;
//         console.log(this.state.displayedData)
//         const animatedListItem = animated(RenderListItem);
//         return (
//             <RenderList>
//                 <Transition
//                     items={this.state.displayedData.map(item => {
//                         console.log(item)
//                         return (
//                             <RenderListItem title={item.title}/>
//                         );
//                     })}
//                     from={{ overflow: 'hidden', height: 0, opacity: 0 }}
//                     enter={{ height: 50, opacity: 1, background: '#28d79f' }}
//                     leave={{ height: 0, opacity: 0, background: '#c23369' }}
//                     update={{ background: '#28b4d7' }}
//                 >
//                     {item => styles => (
//                         <animatedListItem style={{ ...styles }} children={item}/>
//                     )}
//                 </Transition>
//             </RenderList>
//         )
//     }
// }

// function AnimatedList(props) {
    
//     const [index, set] = useState(0);
//     const [displayedData, setDisplayedData] = useState(data.slice(index, index+displayItems));
//     console.log(displayedData)
    
//     useEffect(() => {
//         console.log('here');
//         void setInterval(() => {
//             set(index => setIndex(index, data.length, displayItems))
//         }, interval);
//     }, []);

//     useEffect(() => {
//         console.log(index);
//         const newDisplayData = data.slice(index, index+displayItems);
//         console.log(JSON.stringify(newDisplayData))
//         setDisplayedData(newDisplayData);
//     }, [index])

//     return (
        // <RenderList>
        //     <Transition
        //         items={displayedData}
        //         key={items => items.title}
        //         //initial={null}
        //         from={{ overflow: 'hidden', height: 0, opacity: 0 }}
        //         enter={{ height: 50, opacity: 1, background: '#28d79f' }}
        //         leave={{ height: 0, opacity: 0, background: '#c23369' }}
        //         update={{ background: '#28b4d7' }}
        //         trail={200}
        //     >
        //         {item => styles => (
        //             <animated.div style={{ ...styles }}>
        //                 <RenderListItem {...item}/>
        //             </animated.div>
        //         )}
        //     </Transition>
        // </RenderList>
//     )
// }

// export { AnimatedList };