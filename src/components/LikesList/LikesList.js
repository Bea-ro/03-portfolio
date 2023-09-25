import './LikesList.css';
import { PERSONALDATA } from '../../data/personal-data';

export const LikesList = `
<ul class="likes-list">
${PERSONALDATA.likes.map((like) => `<li class="like">
<img src=${like.icon} alt=${like.name} class="like-icon" id=${like.name} />
</li>`).join('')}
</ul> 
`;