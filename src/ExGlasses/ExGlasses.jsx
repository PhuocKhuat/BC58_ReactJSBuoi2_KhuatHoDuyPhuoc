import React, { Component } from 'react'

export default class ExGlasses extends Component {
    // 5. KHAI BÁO BIẾN STATE, XÁC ĐỊNH SỰ KHÁC NHAU GIỮA CÁC HÌNH MẮT KÍNH, LÀ SỐ THỨ TỰ.
    state = {
        number: "0",
    }
    //6. KHAI BÁO HÀM HANDLE, TRUYỀN THAM SỐ TỪ ONCLICK
    handleCGlasses = (value) =>{
        this.setState({number: value}) 
    }
         
    //1. THÊM ẢNH NỀN.
    imgUrl = "./ExGlasses/glassesImage/background.jpg"
    //2. THÊM ẢNH CÔ GÁI.
    imgGirl1 = "./ExGlasses/glassesImage/model.jpg"
    imgGirl2 = "./ExGlasses/glassesImage/model.jpg"
    //3. THÊM ẢNH CÁC MẮT KÍNH .
    imgG1 ="./ExGlasses/glassesImage/g1.jpg";
    imgG2 ="./ExGlasses/glassesImage/g2.jpg";
    imgG3 ="./ExGlasses/glassesImage/g3.jpg";
    imgG4 ="./ExGlasses/glassesImage/g4.jpg";
    imgG5 ="./ExGlasses/glassesImage/g5.jpg";
    imgG6 ="./ExGlasses/glassesImage/g6.jpg";
    imgG7 ="./ExGlasses/glassesImage/g7.jpg";
    imgG8 ="./ExGlasses/glassesImage/g8.jpg";
    imgG9 ="./ExGlasses/glassesImage/g9.jpg";
  render() {
    return (
      <div>
        {/* ĐI SỬ DỤNG ẢNH NỀN */}
        <img src={this.imgUrl} alt="" className='w-100 imgUrl'/>
        <div>
            {/* ĐI SỬ DỤNG ẢNH CÔ GÁI */}
          <img src={this.imgGirl1} alt="" className='w-25 imgGirl1'/>
          <img src={this.imgGirl2} alt="" className='w-25 imgGirl2'/>

          <img src={`./ExGlasses/glassesImage/v${this.state.number}.png`} alt="" className='v1Img'/>
        </div>
        <div>
            {/* 3. TẠO BẢNG */}
            <table className='imgTable'>
                <tr className=''>
                    <td>
                        {/* 4. ĐI SỬ DỤNG ẢNH KÍNH MẮT */}
                        {/* 7. DÙNG ONCLICK TRUYỀN THAM SỐ TƯƠNG ỨNG, MÀ ĐÃ TRUYỀN THAM SỐ THÌ DÙNG ARROW FUNCTION */}
                        <img src={this.imgG1} alt="" onClick={()=>{this.handleCGlasses("1")}} className='imgGlasses' />

                        <img src={this.imgG2} alt="" onClick={()=>{this.handleCGlasses("2")}} className='imgGlasses' />

                        <img src={this.imgG3} alt="" onClick={()=>{this.handleCGlasses("3")}}className='imgGlasses' />

                        <img src={this.imgG4} alt="" onClick={()=>{this.handleCGlasses("4")}}className='imgGlasses' />

                        <img src={this.imgG5} alt="" onClick={()=>{this.handleCGlasses("5")}}className='imgGlasses' />
                        <img src={this.imgG6} alt="" onClick={()=>{this.handleCGlasses("6")}} className='imgGlasses' /></td>
                </tr>
                <tr>
                    <td>
                        <img src={this.imgG7} alt="" onClick={()=>{this.handleCGlasses("7")}} className='imgGlasses' />
                        <img src={this.imgG8} alt="" onClick={()=>{this.handleCGlasses("8")}} className='imgGlasses' />
                        <img src={this.imgG9} alt="" onClick={()=>{this.handleCGlasses("9")}} className='imgGlasses' />
                    </td>
                </tr>
            </table>
        </div>
      </div>
    )
  }
}
