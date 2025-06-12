import * as React from 'react';

interface EmailTemplateProps {
  rating: number;
  feedback : string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  rating, feedback,
}) => (
  <div>
    <h1>Feedback</h1>
    <div>
      Rating: {rating} <br />
      Feedback: {feedback}
    </div>
  </div>
);