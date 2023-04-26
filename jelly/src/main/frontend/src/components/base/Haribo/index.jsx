import styled from "styled-components";

const HriboImage = styled.img.attrs({ alt : 'hribo' })`
    width:321px;
    height:325px;
    filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25));
    &:hover{
        width: 351px;
        height: 355px;
        transition: all 0.5s;
    }
`

const Haribo = ()=>{
    return (
        <HriboImage src="./haribo.png" />
    )
}

export default Haribo;