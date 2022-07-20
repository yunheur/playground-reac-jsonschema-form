import React from "react";
import { FieldProps } from "@rjsf/core";

interface GeoPositionProps {
  lat?: number;
  lon?: number;
}

export default ({ formData, onChange }: FieldProps<GeoPositionProps>) => {
  const handleChange = (name: String) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...formData,
      [name.toString()]: parseFloat(event.target.value)
    });
  };

  return (
    <div>
      <input
        type="number"
        // name="lat"
        value={formData.lat}
        onChange={handleChange("lat")}
      />
      <input
        type="number"
        // name="lon"
        value={formData.lon}
        onChange={handleChange("lon")}
      />
    </div>
  );
};

// class GeoPosition extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...props.formData };
//   }

//   onChange(name) {
//     return (event) => {
//       this.setState(
//         {
//           [name]: parseFloat(event.target.value)
//         },
//         () => this.props.onChange(this.state)
//       );
//     };
//   }

//   render() {
//     const { lat, lon } = this.state;
//     return (
//       <div>
//         <input type="number" value={lat} onChange={this.onChange("lat")} />
//         <input type="number" value={lon} onChange={this.onChange("lon")} />
//       </div>
//     );
//   }
// }

// export default GeoPosition;
