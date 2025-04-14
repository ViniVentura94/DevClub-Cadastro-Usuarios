import  { TopBackGround } from "./styles";

function DefaultTopBackground({children}, ...props) {
    return (
        <TopBackGround {...props}>
            {children}
        </TopBackGround>
    );
}

export default DefaultTopBackground;