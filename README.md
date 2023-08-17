# Separate User Input by Thousands

A simple utility function to separate user input with thousands separators.

## Installation

Install this package using npm:

```sh
npm install separate-user-input-by-thousands
```

## Usage

### Import the Function

```javascript
import { separateByThousands } from "separate-user-input-by-thousands";
```

### Example: React Usage

```jsx
import React, { useState } from "react";
import { separateByThousands } from "separate-user-input-by-thousands";

function App() {
  const [previousUserInput, setPreviousUserInput] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const getValue = separateByThousands(
            e.target.value,
            previousUserInput
          );
          setPreviousUserInput(getValue);
          setValue(getValue);
          console.log(getValue);
        }}
      />
    </div>
  );
}

export default App;
```

### Example: Vue.js Usage

```vue
<template>
  <div class="App">
    <input
      type="text"
      v-model="value"
      @input="formatInput"
    />
  </div>
</template>

<script>
import { separateByThousands } from "separate-user-input-by-thousands";

export default {
  data() {
    return {
      previousUserInput: "",
      value: ""
    };
  },
  methods: {
    formatInput(event) {
      const getValue = separateByThousands(
        event.target.value,
        this.previousUserInput
      );
      this.previousUserInput = getValue;
      this.value = getValue;
      console.log(getValue);
    }
  }
};
</script>
```

## API

### `separateByThousands(input: string, previousInput: string): string`

Separates the user input with thousands separators.

- `input` (Type: string): The current user input as a string.
- `previousInput` (Type: string): The previous user input as a string.
- Returns: The formatted input with thousands separators.

## Examples

### Basic Example

```javascript
const input = "1234567";
const previousInput = "";
const formattedInput = separateByThousands(input, previousInput);
console.log(formattedInput); // Output: "1,234,567"
```

## Troubleshooting

- If the function doesn't seem to format the input correctly, make sure you are passing the correct input and previous input values.
- If you encounter any issues, feel free to open an issue on the [GitHub repository](https://github.com/your-username/separate-user-input-by-thousands).

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/SarmiRohan/separate-user-input-by-thousands).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, you can reach out to the project maintainer at sarmirohan@gmail.com.
