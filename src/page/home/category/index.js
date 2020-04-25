import React,{Component} from "react";
import {
    CategoryDiv,
    TittleDiv,
    Gride,
    ItemFlex,
    ItemA,
    ImageDiv,
    TextDiv,
    EndTextA

} from './style'
import image1 from "../../../statics/image/1.svg"
import image2 from "../../../statics/image/2.svg"
import image3 from "../../../statics/image/3.svg"
import image4 from "../../../statics/image/4.svg"
import image5 from "../../../statics/image/5.svg"
import image6 from "../../../statics/image/6.svg"
import image7 from "../../../statics/image/7.svg"
import image8 from "../../../statics/image/8.svg"




class Category extends Component{
    render(){
        return(
            <CategoryDiv>
                <TittleDiv>Find quality talent or agencies</TittleDiv>
                <Gride>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image1} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image2} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image3} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image4} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image5} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image6} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image7} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                    <ItemFlex>
                    <ItemA>
                        <ImageDiv src = {image8} alt = "Web, Mobile & Software Dev"></ImageDiv>
                        <TextDiv>Web, Mobile & Software Dev</TextDiv>
                    </ItemA>
                    </ItemFlex>
                </Gride>
                <div style={{paddingTop:"20px",paddingBottom:"30px",textAlign:"center"}}>没找到想要的类目? <EndTextA>查看所有类目</EndTextA></div>
            </CategoryDiv>
        )
    }
}

export default Category