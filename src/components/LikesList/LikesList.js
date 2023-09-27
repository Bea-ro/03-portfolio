import './LikesList.css';
import { PERSONALDATA } from '../../data/personal-data';

export const LikesList = `
<ul class="likes-list">
${PERSONALDATA.likes.map((like) => `<li class="like" id=${like.name}>
<img src=${like.icon} alt=${like.name} class="like-icon" />
</li>`).join('')}
</ul> 
`;