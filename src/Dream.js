import { Component } from 'react';
import swal from 'sweetalert';
import done from './done.png';
import trash from './trash.png';

export class Dream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      dreamList: [],
    };
  }

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addDream(input) {
    if (input === '') {
      swal("Hi!", "Please Enter Your Dream!", "error");
    } else {
      let dreamArray = this.state.dreamList;
      dreamArray.push({ text: input, crossed: false });
      this.setState({ dreamList: dreamArray, userInput: '' });
    }
  }

  changeImage(index) {
    const newList = [...this.state.dreamList];
    newList[index].crossed = !newList[index].crossed;
    this.setState({ dreamList: newList });
  }

  delOneDream(e) {
    let dreamArray = [...this.state.dreamList];
    dreamArray.splice(e.index, 1);
    this.setState({ dreamList: dreamArray });
  }

  deleteDream() {
    let dreamArray = this.state.dreamList;
    dreamArray = [];
    this.setState({ dreamList: dreamArray })
  }

  onFormSubmit(e) {
    e.preventDefault(e);
  }

  render() {
    return (
      <div className='dreamApp'>
        <form onSubmit={this.onFormSubmit}>
          <div className='container'>
            <input
              type="text"
              onChange={(e) => this.onChangeEvent(e.target.value)}
              placeholder="my dream"
              value={this.state.userInput}
            />
          </div>

          <div className='container'>
            <button className='btn add' onClick={() => this.addDream(this.state.userInput)}>
              ADD
            </button>
          </div>

          <div className='container'>
            <ul>
              {this.state.dreamList.map((item, index) => (
                <div className="list" key={index}>
                  <img
                    src={item.crossed ? trash : done} // Conditional image rendering
                    onClick={(e) => this.delOneDream({ index })}
                    alt="done"
                  />
                  <li onClick={() => this.changeImage(index)}>{item.text}</li>
                </div>
              ))}
            </ul>
          </div>

          <div className='container'>
            <button className='btn delete' onClick={() => this.deleteDream()} >DELETE ALL</button>
          </div>
        </form>
      </div>
    );
  }
}
