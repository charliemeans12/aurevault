@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 20% 10%;

    --card: 0 0% 100%;
    --card-foreground: 220 20% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 10%;

    --primary: 220 25% 14%;
    --primary-foreground: 0 0% 98%;

    --secondary: 220 14% 96%;
    --secondary-foreground: 220 20% 10%;

    --muted: 220 14% 96%;
    --muted-foreground: 220 10% 46%;

    --accent: 40 60% 50%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 98%;

    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 220 25% 14%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 220 20% 7%;
    --foreground: 220 14% 96%;

    --card: 220 20% 10%;
    --card-foreground: 220 14% 96%;

    --popover: 220 20% 10%;
    --popover-foreground: 220 14% 96%;

    --primary: 40 60% 50%;
    --primary-foreground: 220 20% 7%;

    --secondary: 220 20% 14%;
    --secondary-foreground: 220 14% 96%;

    --muted: 220 20% 14%;
    --muted-foreground: 220 10% 60%;

    --accent: 40 60% 50%;
    --accent-foreground: 220 20% 7%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 220 20% 18%;
    --input: 220 20% 18%;
    --ring: 40 60% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Responsive container sizes */
@layer utilities {
  .container {
    @apply mx-auto px-4;
    max-width: 100%;
  }

  @screen sm {
    .container {
      max-width: 640px;
    }
  }

  @screen md {
    .container {
      max-width: 768px;
    }
  }

  @screen lg {
    .container {
      max-width: 1024px;
    }
  }

  @screen xl {
    .container {
      max-width: 1280px;
    }
  }

  @screen 2xl {
    .container {
      max-width: 1536px;
    }
  }
}

/* Custom scrollbar */
.dropdown-scrollable {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--accent)) transparent;
}

.dropdown-scrollable::-webkit-scrollbar {
  width: 4px;
}

.dropdown-scrollable::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-scrollable::-webkit-scrollbar-thumb {
  background-color: hsl(var(--accent));
  border-radius: 2px;
}
