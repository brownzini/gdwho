const GAME_MODE_CARD = {
  randomMode: {
    titleContent: "Modo Random",
    labelContent: "Neste modo as respostas são em modelos pré treinados",
    buttonDescription: "JOGAR",
    colors: {
      borderArea: "1px solid #4C3273",
      borderButton: "border-[1px] border-[#4C3273]",
      title: "#4C3273",
      label: "#311F35",
      button: "bg-[#4C3273]",
      hoverButton: "hover:text-[#4C3273]",
      loading: "#4C3273"
    },
  },
  creativeMode: {
    titleContent: "Modo Criativo",
    labelContent: "Modo feito para testar o jogo desenvolvido por você mesmo",
    buttonDescription: "JOGAR",
    colors: {
      borderArea: "1px solid #1D4CDA",
      borderButton: "border-[1px] border-[#1D4CDA]",
      title: "#1D4CDA",
      label: "#0C1F56",
      button: "bg-[#11349C]",
      hoverButton: "hover:text-[#1D4CDA]",
      loading: "#1D4CDA"
    },
  },
  playerMode: {
    titleContent: "Modo Player",
    labelContent: "Modo para jogar em modelos desenvolvidos por outros jogadores",
    buttonDescription: "CÓDIGO",
    colors: {
      borderArea: "1px solid #999639",
      borderButton: "border-[1px] border-[#999639]",
      title: "#75720B",
      label: "#3F3E10",
      button: "bg-[#59571E]",
      hoverButton: "hover:text-[#75720B]",
      loading: "#75720B"
    },
  },
};

export default GAME_MODE_CARD;
