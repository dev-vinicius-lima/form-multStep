/* eslint-disable react/prop-types */
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review_form">
      <div className="form_control score_container">
        <label className="radio_container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            required
            checked={data.review === 'unsatisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito </p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            name="review"
            value="neutral"
            required
            checked={data.review === 'neutral'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor </p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            required
            checked={data.review === 'satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito </p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            required
            checked={data.review === 'very_satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito </p>
        </label>
      </div>
      <div className="form_txtarea">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          cols="40"
          rows="10"
          placeholder="Conte como foi a sua experiência com o produto..."
          required
          value={data.comment || ''}
          onChange={(e) => updateFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
