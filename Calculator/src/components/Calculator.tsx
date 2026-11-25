type OperationProps = {
    sign : string;
    onClick?: () => void;
}
export function Calculator({sign, onClick} : OperationProps){
    return(
        <button onClick = {onClick} className="bg-orange-500 text-2xl font-bold text-white ">{sign}</button>
    );
}

type ButtonProps = {
    value: number | string;
    onClick?: () => void;
    className? : string; 
}

export function Button({ value, onClick,className }: ButtonProps) {
    return (
        <button onClick={onClick} className={"bg-gray-200 text-2xl font-bold text-black border-black "+ className}>{value}</button>
    );
}