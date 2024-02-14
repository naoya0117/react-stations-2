type CardProps = {
    content: string;
}
export const Card = ({content}:CardProps) => (
    <div className="bg-white shadow-md m-4 p-4 w-96">
        <h2>{content}</h2>
    </div>
);