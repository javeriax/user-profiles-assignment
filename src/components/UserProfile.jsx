import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function UserProfile(props) {
    return (
        <div style={{
            background: '#fff',
            border: '2px solid #f0a8d8',
            padding: '20px',
            borderRadius: '12px',
            margin: '15px 0',
            boxShadow: '0 2px 4px rgba(217, 70, 166, 0.1)'
        }}>
            <h2 style={{ color: '#d946a6', marginBottom: '10px', fontSize: '24px' }}>
                {props.name}
                {props.isOnline && <span style={{ color: '#22c55e', fontSize: '14px', marginLeft: '8px' }}>🟢 Online</span>}
            </h2>
            <p style={{ color: '#666', marginBottom: '8px', fontSize: '16px' }}>
                <strong>Role:</strong> {props.role}
            </p>
            <p style={{ color: '#666', marginBottom: '8px', fontSize: '16px' }}>
                <strong>Age:</strong> {props.age}
            </p>
            <p style={{ color: '#666', marginBottom: '15px', fontSize: '14px', fontStyle: 'italic' }}>
                <strong>Bio:</strong> {props.bio}
            </p>
            <div style={{ borderTop: '1px solid #f0a8d8', paddingTop: '15px' }}>
                <strong style={{ color: '#d946a6' }}>Socials:</strong>
                <ul style={{ listStyle: 'none', marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <li>
                        <a href={`https://github.com/${props.socials.github.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#d946a6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                            <FaGithub /> {props.socials.github}
                        </a>
                    </li>
                    <li>
                        <a href={`https://twitter.com/${props.socials.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#d946a6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                            <FaTwitter /> {props.socials.twitter}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}