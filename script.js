// 템플릿 데이터
const templates = [
  {
    id: 'daily-retrospective',
    name: '데일리 회고',
    description: '하루를 돌아보는 회고 템플릿',
    category: '회고',
    content: `# 📅 데일리 회고 - {{date}}

## 🌅 오늘의 한 줄
> 

## ✅ 오늘 한 일
- [ ] 
- [ ] 
- [ ] 

## 💡 배운 점
- 

## 😊 잘한 점
- 

## 😓 아쉬운 점
- 

## 🎯 내일의 목표
- [ ] 
- [ ] 

## 📝 메모
`
  },
  {
    id: 'reading-note',
    name: '독서 노트',
    description: '책을 읽으며 기록하는 노트',
    category: '학습',
    content: `# 📚 독서 노트

## 책 정보
- **제목**: 
- **저자**: 
- **출판사**: 
- **읽은 기간**: {{date}} ~ 
- **평점**: ⭐⭐⭐⭐⭐

## 📖 한 줄 요약
> 

## 🎯 핵심 내용
### Chapter 1
- 

### Chapter 2
- 

## 💭 느낀 점
- 

## 📝 인상 깊은 문구
> 

## 🔗 관련 자료/링크
- 

## 💡 실천 계획
- [ ] 
- [ ] `
  },
  {
    id: 'project-planning',
    name: '프로젝트 기획',
    description: '새 프로젝트를 기획하는 템플릿',
    category: '업무',
    content: `# 🚀 프로젝트 기획서

## 📋 프로젝트 개요
- **프로젝트명**: 
- **기간**: {{date}} ~ 
- **담당자**: 
- **상태**: 🟡 진행중

## 🎯 목표
- 

## 📊 범위
### 포함
- 

### 제외
- 

## 👥 이해관계자
| 역할 | 이름 | 연락처 |
|------|------|--------|
| PM | | |
| 개발 | | |
| 디자인 | | |

## 📅 마일스톤
- [ ] **Phase 1**: 
- [ ] **Phase 2**: 
- [ ] **Phase 3**: 

## ⚠️ 리스크
| 리스크 | 영향도 | 대응책 |
|--------|--------|--------|
| | | |

## 📝 메모
- `
  },
  {
    id: 'weekly-plan',
    name: '주간 계획',
    description: '한 주를 계획하는 템플릿',
    category: '계획',
    content: `# 📅 주간 계획 - {{week}}

## 🎯 이번 주 목표
- 

## 📋 할 일 목록

### 월요일
- [ ] 
- [ ] 

### 화요일
- [ ] 
- [ ] 

### 수요일
- [ ] 
- [ ] 

### 목요일
- [ ] 
- [ ] 

### 금요일
- [ ] 
- [ ] 

## 📊 우선순위
| 우선순위 | 작업 | 마감일 |
|----------|------|--------|
| P0 | | |
| P1 | | |
| P2 | | |

## 📝 메모
- `
  },
  {
    id: 'meeting-notes',
    name: '회의록',
    description: '회의 내용을 기록하는 템플릿',
    category: '업무',
    content: `# 📝 회의록

## 📋 회의 정보
- **일시**: {{date}} 
- **장소**: 
- **참석자**: 
- **작성자**: 

## 🎯 회의 목적
- 

## 📌 안건
1. 
2. 
3. 

## 💬 논의 내용
### 안건 1
- 

### 안건 2
- 

### 안건 3
- 

## ✅ 결정 사항
- 

## 📋 할 일 (Action Items)
| 담당자 | 할 일 | 마감일 | 상태 |
|--------|-------|--------|------|
| | | | ⬜ |
| | | | ⬜ |

## 📝 다음 회의
- **일시**: 
- **안건**: 

## 💭 기타 메모
- `
  },
  {
    id: 'idea-note',
    name: '아이디어 노트',
    description: '아이디어를 기록하고 발전시키는 템플릿',
    category: '창작',
    content: `# 💡 아이디어 노트

## 🎯 아이디어 제목
- 

## 📝 아이디어 개요
- 

## 🤔 계기
- 

## 🎯 타겟
- 

## 💪 강점
- 

## ⚠️ 약점/리스크
- 

## 🚀 실행 계획
### Phase 1: 검증
- [ ] 
- [ ] 

### Phase 2: 개발
- [ ] 
- [ ] 

### Phase 3: 런칭
- [ ] 
- [ ] 

## 📊 경쟁 분석
| 경쟁사 | 강점 | 약점 |
|--------|------|------|
| | | |

## 🔗 참고 자료
- 

## 📝 메모
- `
  },
  {
    id: 'habit-tracker',
    name: '습관 트래커',
    description: '일일 습관을 체크하는 템플릿',
    category: '생활',
    content: `# 🎯 습관 트래커 - {{month}}

## 📊 이번 달 목표
- 

## ✅ 일일 체크리스트

| 날짜 | 습관1 | 습관2 | 습관3 | 습관4 | 습관5 | 메모 |
|------|-------|-------|-------|-------|-------|------|
| 1 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 2 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 3 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 4 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 5 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| ... | | | | | | |

## 📈 주간 회고

### Week 1
- 달성률: 
- 잘한 점: 
- 개선점: 

### Week 2
- 달성률: 
- 잘한 점: 
- 개선점: 

### Week 3
- 달성률: 
- 잘한 점: 
- 개선점: 

### Week 4
- 달성률: 
- 잘한 점: 
- 개선점: 

## 🎯 다음 달 목표
- `
  },
  {
    id: 'travel-planner',
    name: '여행 플래너',
    description: '여행 계획을 세우는 템플릿',
    category: '생활',
    content: `# ✈️ 여행 플래너

## 🗺️ 여행 개요
- **목적지**: 
- **기간**: {{date}} ~ 
- **동행**: 
- **예산**: 

## 📝 준비물 체크리스트
- [ ] 여권/신분증
- [ ] 티켓/예약 확인
- [ ] 충전기/보조배터리
- [ ] 세멸용품
- [ ] 옷/신발
- [ ] 약품
- [ ] 기타: 

## 🗓️ 일정

### Day 1 - {{date}}
| 시간 | 일정 | 장소 | 비용 |
|------|------|------|------|
| 09:00 | | | |
| 12:00 | | | |
| 15:00 | | | |
| 18:00 | | | |

### Day 2
| 시간 | 일정 | 장소 | 비용 |
|------|------|------|------|
| 09:00 | | | |
| 12:00 | | | |
| 15:00 | | | |
| 18:00 | | | |

## 🍽️ 맛집 리스트
| 이름 | 위치 | 메뉴 | 예상비용 |
|------|------|------|----------|
| | | | |

## 🏨 숙소 정보
- **이름**: 
- **주소**: 
- **연락처**: 
- **체크인**: 
- **체크아웃**: 

## 🚗 교통 정보
- 

## 💰 비용 정산
| 항목 | 예상 | 실제 | 차이 |
|------|------|------|------|
| 교통 | | | |
| 숙박 | | | |
| 식비 | | | |
| 입장료 | | | |
| 쇼핑 | | | |
| **합계** | | | |

## 📸 추억 기록
- `
  }
];

// 상태 관리
let selectedIds = [];
let activeCategory = 'all';

// 유틸리티 함수
function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function getCurrentWeek() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const week = Math.ceil(now.getDate() / 7);
  return `${year}년 ${month}월 ${week}주차`;
}

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}년 ${now.getMonth() + 1}월`;
}

function processTemplate(content) {
  return content
    .replace(/{{date}}/g, getCurrentDate())
    .replace(/{{week}}/g, getCurrentWeek())
    .replace(/{{month}}/g, getCurrentMonth());
}

// DOM 요소
const templateListEl = document.getElementById('template-list');
const selectedCountEl = document.getElementById('selected-count');
const selectAllBtn = document.getElementById('select-all-btn');
const copyBtn = document.getElementById('copy-btn');
const previewTextEl = document.getElementById('preview-text');
const categoryBtns = document.querySelectorAll('.category-btn');

// 템플릿 목록 렌더링
function renderTemplates() {
  const filtered = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  templateListEl.innerHTML = filtered.map(template => `
    <div class="template-item ${selectedIds.includes(template.id) ? 'selected' : ''}" data-id="${template.id}">
      <input type="checkbox" ${selectedIds.includes(template.id) ? 'checked' : ''}>
      <div class="template-info">
        <div class="template-name">
          ${template.name}
          <span class="template-badge">${template.category}</span>
        </div>
        <div class="template-desc">${template.description}</div>
      </div>
    </div>
  `).join('');

  // 이벤트 리스너 등록
  document.querySelectorAll('.template-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.type !== 'checkbox') {
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
      }
      toggleTemplate(item.dataset.id);
    });
  });
}

// 템플릿 토글
function toggleTemplate(id) {
  if (selectedIds.includes(id)) {
    selectedIds = selectedIds.filter(i => i !== id);
  } else {
    selectedIds.push(id);
  }
  updateUI();
}

// UI 업데이트
function updateUI() {
  // 선택 개수 업데이트
  selectedCountEl.textContent = `${selectedIds.length}개 선택됨`;

  // 템플릿 아이템 스타일 업데이트
  document.querySelectorAll('.template-item').forEach(item => {
    const id = item.dataset.id;
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (selectedIds.includes(id)) {
      item.classList.add('selected');
      checkbox.checked = true;
    } else {
      item.classList.remove('selected');
      checkbox.checked = false;
    }
  });

  // 미리보기 업데이트
  updatePreview();
}

// 미리보기 업데이트
function updatePreview() {
  const selectedTemplates = templates.filter(t => selectedIds.includes(t.id));
  
  if (selectedTemplates.length === 0) {
    previewTextEl.textContent = '왼쪽에서 템플릿을 선택하면 미리보기가 여기에 표시됩니다';
    previewTextEl.classList.add('empty');
    copyBtn.disabled = true;
    return;
  }

  const markdown = selectedTemplates
    .map(t => processTemplate(t.content))
    .join('\n\n---\n\n');

  previewTextEl.textContent = markdown;
  previewTextEl.classList.remove('empty');
  copyBtn.disabled = false;
}

// 전체 선택
function selectAll() {
  const filtered = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);
  
  const allIds = filtered.map(t => t.id);
  const allSelected = allIds.every(id => selectedIds.includes(id));

  if (allSelected) {
    selectedIds = selectedIds.filter(id => !allIds.includes(id));
  } else {
    selectedIds = [...new Set([...selectedIds, ...allIds])];
  }
  
  updateUI();
}

// 복사 기능
async function copyToClipboard() {
  const selectedTemplates = templates.filter(t => selectedIds.includes(t.id));
  const markdown = selectedTemplates
    .map(t => processTemplate(t.content))
    .join('\n\n---\n\n');

  try {
    await navigator.clipboard.writeText(markdown);
    copyBtn.textContent = '✅ 복사 완료!';
    copyBtn.classList.add('copied');
    
    setTimeout(() => {
      copyBtn.textContent = '📋 마크다운 복사';
      copyBtn.classList.remove('copied');
    }, 2000);
  } catch (err) {
    alert('복사에 실패했습니다. 직접 선택하여 복사해주세요.');
  }
}

// 카테고리 필터
function setCategory(category) {
  activeCategory = category;
  
  // 버튼 스타일 업데이트
  categoryBtns.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderTemplates();
}

// 이벤트 리스너
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => setCategory(btn.dataset.category));
});

selectAllBtn.addEventListener('click', selectAll);
copyBtn.addEventListener('click', copyToClipboard);

// 초기화
renderTemplates();
