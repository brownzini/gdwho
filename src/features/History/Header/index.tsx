import headerStyles from "./styles";

export default function Header() {
    return (
        <div className={headerStyles["container"]}>
            <h2 className={headerStyles["title"]}>Histórico</h2>
        </div>
    );
}