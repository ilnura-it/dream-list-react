import { Component } from 'react';
import swal from 'sweetalert';

export class Dream extends Component {
  state = {
      userInput: '',
      dreamList: []
    }
  

    onChangeEvent (e){
      //1console.log(e.target.value);
      this.setState({userInput: e})
      //2console.log(e);
}
  
  addDream(input) {
    if(input === ''){
      swal("Hi!", "Please Enter Your Dream!", "error");
    } else {
      let dreamArray = this.state.dreamList;
    dreamArray.push(input);
    this.setState({ dreamList: dreamArray, userInput: '' });
    }
    
  }

 crossedWord (event) {
  const dreamLi = event.target;
   dreamLi.classList.toggle('crossed');
  }

  delOneDream(e) {
    let dreamArray = this.state.dreamList;
    dreamArray.splice(e.index, 1);
    this.setState({dreamList: dreamArray});
}

 deleteDream(){
   let dreamArray = this.state.dreamList;
   dreamArray = [];
   this.setState({dreamList:dreamArray})
 }

 onFormSubmit(e){
   e.preventDefault(e);
 }

  render() {
    return (
      <div className='dreamApp'>
        <form onSubmit = {this.onFormSubmit}>
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
            {this.state.dreamList.map((item, index) => <div className='list'  key={index}><li onClick={this.crossedWord} onDoubleClick={(e) => this.delOneDream({index})} >{item}</li> 
            
            </div> )}
          </ul>
      </div>

      <div className='container'>  
        <button className='btn delete'  onClick={() => this.deleteDream()} >DELETE ALL</button>
      </div> 

      </form>
      </div>
    );
  }
}
