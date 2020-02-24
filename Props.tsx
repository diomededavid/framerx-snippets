import * as React from "react";
import { PropertyControls, ControlType } from "framer";

// Define type of property
export interface Props {
  text: string;
  color: string;
  boolean: boolean;
  number: number;
  image: string;
  file: string;
  enum: "A" | "B" | "C";
  segment: string;
  fused: number;
  fusedPerSide: boolean;
  fusedTop: number;
  fusedRight: number;
  fusedBottom: number;
  fusedLeft: number;
  width: number;
  height: number;
}

export class Props extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Framer X",
    color: "#05F",
    boolean: true,
    number: 0,
    image: "",
    file: "",
    enum: "A",
    segment: "A",
    fused: 0,
    fusedPerSide: false,
    fusedTop: 0,
    fusedRight: 0,
    fusedBottom: 0,
    fusedLeft: 0,
    width: 500,
    height: 500,
  };

  // Items shown in property panel

  static propertyControls: PropertyControls = {
    text: {
      type: ControlType.String,
      title: "Text",
      placeholder: "Framer X",
    },
    color: {
      type: ControlType.Color,
      title: "Color",
    },
    boolean: {
      type: ControlType.Boolean,
      title: "Boolean",
      enabledTitle: "True",
      disabledTitle: "False",
    },
    number: {
      type: ControlType.Number,
      title: "Number",
      min: 0,
      max: 100,
      step: 1,
    },
    image: { type: ControlType.Image, title: "Image" },
    file: {
      type: ControlType.File,
      allowedFileTypes: ["png", "jpg"],
      title: "File",
    },
    enum: {
      type: ControlType.Enum,
      options: ["A", "B", "C"],
      optionTitles: ["Option A", "Option B", "Option C"],
      title: "Enum",
    },
    segment: {
      type: ControlType.SegmentedEnum,
      options: ["A", "B", "C"],
      optionTitles: ["A", "B", "C"],
      title: "Segment",
    },
    fused: {
      type: ControlType.FusedNumber,
      toggleKey: "fusedPerSide",
      toggleTitles: ["All Sides", "Per Side"],
      valueKeys: ["fusedTop", "fusedRight", "fusedBottom", "fusedLeft"],
      valueLabels: ["T", "R", "B", "L"],
      min: 0,
      title: "Fused",
    },
  };

  // Render and default styling
  render() {
    const style: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: "#FFF",
      background: this.props.color,
      backgroundImage: `url("${this.props.image}")`,
      backgroundSize: "cover",
      overflow: "hidden",
      fontSize: 15,
      lineHeight: 1.5,
    };

    // Visualize property values
    return (
      <div style={style}>
        <div>
          <div>
            <span style={{ fontWeight: 700 }}>Text:</span> {this.props.text}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Color:</span> {this.props.color}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Boolean: </span>
            {JSON.stringify(this.props.boolean)}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Image:</span>{" "}
            {this.props.image ? new URL(this.props.image).pathname : ""}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>File:</span>{" "}
            {this.props.file ? new URL(this.props.file).pathname : ""}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Number:</span> {this.props.number}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Enum:</span> {this.props.enum}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Segment:</span>{" "}
            {this.props.segment}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Fused:</span>{" "}
            {this.props.fusedPerSide
              ? this.props.fusedTop +
                " " +
                this.props.fusedRight +
                " " +
                this.props.fusedBottom +
                " " +
                this.props.fusedLeft
              : this.props.fused}
          </div>
        </div>
      </div>
    );
  }
}
