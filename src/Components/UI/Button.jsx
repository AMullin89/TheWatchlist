export default function Button({textOnly, children, ...props}){

    let cssClasses = textOnly ? 'text-button' : 'action-button';

    return <button className={cssClasses} {...props}>{children} </button>
}