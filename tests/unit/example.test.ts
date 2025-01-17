describe('기본 테스트 그룹', () => {
  test('덧셈이 올바르게 동작해야 합니다', () => {
    expect(1 + 2).toBe(3);
  });

  test('문자열 비교가 올바르게 동작해야 합니다', () => {
    const text = 'Hello, Jest!';
    expect(text).toContain('Jest');
    expect(text).toHaveLength(12);
  });

  test('객체 비교가 올바르게 동작해야 합니다', () => {
    const data = {
      name: '테스트',
      age: 25,
    };

    expect(data).toEqual({
      name: '테스트',
      age: 25,
    });
  });

  test('비동기 함수 테스트가 올바르게 동작해야 합니다', async () => {
    const fetchData = async () => 'async data';
    const result = await fetchData();
    expect(result).toBe('async data');
  });
});
