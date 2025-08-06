import headerStyles from "./styles";

export default function Header() {
    return (
        <div
          data-name="history-screen-header-container"  
          className={headerStyles["container"]}
        >
            <h2
              data-name="history-screen-header-title"  
              className={headerStyles["title"]}
            >
                Histórico
            </h2>
        </div>
    );
}