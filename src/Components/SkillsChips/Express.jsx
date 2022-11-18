import Chip from '@mui/material/Chip';

export default function Express() {
  return (
    <>
      <Chip
        mx={{ mt: 2, mx: 2, px: 2 }}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="whiteFill"
          >
            <path d="M12,22h-1v-0.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V22z"></path>
            <path d="M22.25,21c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7	c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05	c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2	C23,21.34,22.66,21,22.25,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7	c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M29.5,21c-0.28,0-0.5,0.22-0.5,0.5V22h1	v-0.5C30,21.22,29.78,21,29.5,21z M29.5,21c-0.28,0-0.5,0.22-0.5,0.5V22h1v-0.5C30,21.22,29.78,21,29.5,21z M22.25,21	c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05	c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M38,6H10c-2.21,0-4,1.79-4,4v28c0,2.21,1.79,4,4,4h28	c2.21,0,4-1.79,4-4V10C42,7.79,40.21,6,38,6z M10,21.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V23h-2v1c0,0.28,0.22,0.5,0.5,0.5	S12,24.28,12,24h1c0,0.83-0.67,1.5-1.5,1.5S10,24.83,10,24V21.5z M24,23.88c0,0.89-0.73,1.62-1.62,1.62h-0.01	c-0.13,0-0.25-0.01-0.37-0.04c-0.18-0.04-0.35-0.12-0.5-0.22v2.26h-1V20h1v0.26c0.15-0.1,0.32-0.18,0.5-0.22	c0.12-0.03,0.24-0.04,0.37-0.04h0.01c0.89,0,1.62,0.73,1.62,1.62V23.88z M17.93,21.33c1.64,4.85,3.33,11.36,3.07,17.17L19.5,38	c0,0-0.63-5-3.36-14.52c-1.79,2.25-3.6,4.95-5.14,8.02h-1c0,0,0.55-3.03,5.76-9.31c-0.64-2.18-1.39-4.58-2.26-7.19l1.5-1	c0,0,1.19,2.47,2.51,6.15c1.51-1.69,3.32-3.57,5.49-5.65l1,1C24,15.5,21.23,17.58,17.93,21.33z M27.5,21.03	C27.42,21.01,27.34,21,27.25,21c-0.6,0-1.14,0.43-1.25,1v3.5h-1V20h1v0.7c0.03-0.04,0.06-0.08,0.09-0.11	C26.45,20.22,26.95,20,27.5,20V21.03z M31,23h-2v1c0,0.28,0.22,0.5,0.5,0.5S30,24.28,30,24h1c0,0.83-0.67,1.5-1.5,1.5	S28,24.83,28,24v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V23z M34.6,24.51c-0.08,0.19-0.19,0.36-0.33,0.51	c-0.15,0.15-0.32,0.27-0.51,0.35c-0.2,0.09-0.42,0.13-0.65,0.13c-0.44,0-0.8-0.14-1.1-0.41c-0.15-0.14-0.27-0.31-0.36-0.51	c-0.09-0.2-0.14-0.43-0.15-0.7h1.02c0.02,0.15,0.07,0.28,0.15,0.41c0.08,0.13,0.23,0.19,0.43,0.19c0.16,0,0.29-0.05,0.42-0.15	c0.12-0.1,0.18-0.25,0.18-0.43c0-0.15-0.03-0.28-0.11-0.38c-0.08-0.11-0.22-0.2-0.43-0.28l-0.52-0.19c-0.33-0.13-0.6-0.31-0.8-0.57	c-0.19-0.25-0.29-0.55-0.29-0.91c0-0.23,0.05-0.44,0.13-0.63c0.08-0.2,0.2-0.36,0.35-0.51c0.14-0.14,0.31-0.24,0.5-0.32	c0.19-0.07,0.39-0.11,0.61-0.11c0.22,0,0.42,0.04,0.61,0.12c0.19,0.07,0.35,0.18,0.48,0.33c0.14,0.14,0.24,0.3,0.32,0.5	c0.08,0.19,0.12,0.4,0.12,0.62h-1.02c-0.01-0.19-0.06-0.32-0.17-0.42c-0.11-0.09-0.24-0.13-0.38-0.13c-0.17,0-0.3,0.05-0.39,0.16	c-0.09,0.11-0.14,0.24-0.14,0.38c0,0.1,0.02,0.19,0.07,0.29c0.05,0.09,0.18,0.18,0.39,0.26l0.63,0.25c0.4,0.16,0.68,0.37,0.83,0.64	c0.16,0.27,0.23,0.56,0.23,0.88C34.72,24.1,34.68,24.32,34.6,24.51z M38.38,24.51c-0.08,0.19-0.19,0.36-0.34,0.51	c-0.14,0.15-0.31,0.27-0.5,0.35c-0.2,0.09-0.42,0.13-0.65,0.13c-0.44,0-0.81-0.14-1.1-0.41c-0.15-0.14-0.27-0.31-0.36-0.51	c-0.1-0.2-0.15-0.43-0.15-0.7h1.02c0.02,0.15,0.07,0.28,0.15,0.41s0.22,0.19,0.43,0.19c0.15,0,0.29-0.05,0.42-0.15	c0.12-0.1,0.18-0.25,0.18-0.43c0-0.15-0.04-0.28-0.11-0.38c-0.08-0.11-0.22-0.2-0.43-0.28l-0.52-0.19c-0.34-0.13-0.6-0.31-0.8-0.57	c-0.19-0.25-0.29-0.55-0.29-0.91c0-0.23,0.04-0.44,0.13-0.63c0.08-0.2,0.2-0.36,0.35-0.51c0.14-0.14,0.31-0.24,0.5-0.32	C36.5,20.04,36.7,20,36.92,20c0.22,0,0.42,0.04,0.61,0.12c0.19,0.07,0.35,0.18,0.48,0.33c0.14,0.14,0.24,0.3,0.32,0.5	c0.08,0.19,0.12,0.4,0.12,0.62h-1.02c-0.01-0.19-0.07-0.32-0.17-0.42c-0.11-0.09-0.24-0.13-0.38-0.13c-0.17,0-0.3,0.05-0.39,0.16	c-0.1,0.11-0.14,0.24-0.14,0.38c0,0.1,0.02,0.19,0.07,0.29c0.05,0.09,0.18,0.18,0.38,0.26l0.64,0.25c0.4,0.16,0.68,0.37,0.83,0.64	c0.15,0.27,0.23,0.56,0.23,0.88C38.5,24.1,38.46,24.32,38.38,24.51z M29.5,21c-0.28,0-0.5,0.22-0.5,0.5V22h1v-0.5	C30,21.22,29.78,21,29.5,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7	c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05	c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2	C23,21.34,22.66,21,22.25,21z M29.5,21c-0.28,0-0.5,0.22-0.5,0.5V22h1v-0.5C30,21.22,29.78,21,29.5,21z M29.5,21	c-0.28,0-0.5,0.22-0.5,0.5V22h1v-0.5C30,21.22,29.78,21,29.5,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7	v2c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M22.25,21	c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05	c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z M22.25,21c-0.09,0-0.17,0.02-0.25,0.05c-0.29,0.1-0.5,0.38-0.5,0.7v2	c0,0.32,0.21,0.6,0.5,0.7c0.08,0.03,0.16,0.05,0.25,0.05c0.41,0,0.75-0.34,0.75-0.75v-2C23,21.34,22.66,21,22.25,21z"></path>
          </svg>
        }
        color="secondary"
        label="Express"
      />
    </>
  );
}
