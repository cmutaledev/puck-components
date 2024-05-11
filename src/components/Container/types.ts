export interface ContainerProps {
    postionToWindow: string;
    background: {
      backgroundColor: string;
      backgroundImage: string;
      backgroundPositionX: string;
      backgroundPositionY: string;
      tint: string;
    };
    dimension: {
      width: string;
      height: string;
      lineHeight: number;
      margin: string;
      padding: string;
    };
    columns: {
      columns: {
        span?: number;
      }[];
      distribution: string;
    };
    content: {
      position: string;
      spacing: string;
      textColor: string;
      // textAlign: any,
      textAlign?: "left" | "center" | "right";
    };
    fontFamily: string;
  }
  